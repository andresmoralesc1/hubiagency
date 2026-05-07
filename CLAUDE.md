@AGENTS.md

## Vercel Deployment (hubiagency)

### Environment Variables
```bash
TWENTY_API_URL=https://crm.neuralflow.space
TWENTY_API_KEY=your_api_key_here
N8N_BRIEF_WEBHOOK_URL=  # optional
N8N_CONTACT_WEBHOOK_URL= # optional
```

### Twenty CRM Integration
- Brief form submissions auto-create People + Companies in Twenty CRM
- API: `POST /rest/people` and `POST /rest/companies`
- Workspace: main
