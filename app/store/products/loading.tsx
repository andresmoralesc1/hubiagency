export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 w-64 mx-auto bg-zinc-800 rounded animate-pulse mb-4" />
          <div className="h-6 w-96 mx-auto bg-zinc-800 rounded animate-pulse" />
        </div>

        {/* Product grid skeleton */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="border border-zinc-800 rounded-lg p-6 bg-zinc-950/50">
              <div className="h-40 bg-zinc-800 rounded animate-pulse mb-4" />
              <div className="h-6 w-3/4 bg-zinc-800 rounded animate-pulse mb-2" />
              <div className="h-4 w-1/2 bg-zinc-800 rounded animate-pulse mb-4" />
              <div className="h-10 w-full bg-zinc-800 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}