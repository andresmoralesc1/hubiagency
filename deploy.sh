#!/bin/bash
set -e

echo "========================================"
echo "HubIAgency Backend Deployment"
echo "========================================"

# Configuration
COMPOSE_FILE="docker-compose.yml"
BACKEND_DIR="./backend"
HEALTH_URL="http://localhost:9000/health"
MAX_RETRIES=30
RETRY_INTERVAL=10

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Step 1: Check if docker-compose is available
log_info "Checking prerequisites..."
if ! command -v docker-compose &> /dev/null; then
    log_error "docker-compose is not installed"
    exit 1
fi

# Step 2: Create database on PostgreSQL
log_info "Creating hubiagency database..."
PGPASSWORD='Iq%2FFctWkhkFulGNfSZBAWaKCmuETysEiUJxq5OanpLA%3D' psql \
    -h postgres \
    -U neuralflow \
    -tc "SELECT 1 FROM pg_database WHERE datname = 'hubiagency'" | grep -q 1 \
    || PGPASSWORD='Iq%2FFctWkhkFulGNfSZBAWaKCmuETysEiUJxq5OanpLA%3D' psql \
    -h postgres \
    -U neuralflow \
    -c "CREATE DATABASE hubiagency;" || true

# Step 3: Copy .env.example to .env if it doesn't exist
if [ ! -f ".env" ]; then
    log_info "Creating .env from .env.example..."
    cp .env.example .env
    log_warn "Please update .env with your configuration!"
else
    log_info ".env already exists, skipping..."
fi

# Step 4: Generate random secrets if not set
if grep -q "change-me" .env 2>/dev/null; then
    log_info "Generating random secrets..."
    export HUBI_SIGNATURE_SECRET=$(openssl rand -hex 32)
    export JWT_SECRET=$(openssl rand -hex 32)
    export COOKIE_SECRET=$(openssl rand -hex 32)
fi

# Step 5: Build and start services
log_info "Building and starting Medusa services..."
docker-compose -f $COMPOSE_FILE up -d --build

# Step 6: Wait for Medusa to be healthy
log_info "Waiting for Medusa to be healthy..."
for i in $(seq 1 $MAX_RETRIES); do
    if curl -sf $HEALTH_URL > /dev/null 2>&1; then
        log_info "Medusa is healthy!"
        break
    fi

    if [ $i -eq $MAX_RETRIES ]; then
        log_error "Medusa failed to become healthy after $MAX_RETRIES retries"
        log_error "Check logs with: docker-compose -f $COMPOSE_FILE logs medusa"
        exit 1
    fi

    log_info "Attempt $i/$MAX_RETRIES - Medusa not ready yet, waiting ${RETRY_INTERVAL}s..."
    sleep $RETRY_INTERVAL
done

# Step 7: Run migrations
log_info "Running database migrations..."
docker-compose -f $COMPOSE_FILE exec -T medusa medusa migrations run

# Step 8: Seed database (optional)
if [ "$1" == "--seed" ] || [ "$1" == "-s" ]; then
    log_info "Seeding database..."
    docker-compose -f $COMPOSE_FILE exec -T medusa ts-node seed.ts
fi

# Step 9: Final status
echo ""
echo "========================================"
log_info "Deployment Complete!"
echo "========================================"
echo ""
echo "Services:"
echo "  - Medusa API:  http://localhost:9000"
echo "  - MeiliSearch: http://localhost:7700"
echo "  - Admin UI:    http://localhost:9000/app/admin"
echo ""
echo "Useful commands:"
echo "  - View logs:   docker-compose -f $COMPOSE_FILE logs -f medusa"
echo "  - Run seed:    ./deploy.sh --seed"
echo "  - Stop:        docker-compose -f $COMPOSE_FILE down"
echo ""
