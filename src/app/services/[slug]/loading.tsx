export default function ServiceLoading() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      {/* Service hero skeleton */}
      <div className="max-w-4xl mb-12">
        <div className="skeleton w-24 h-6 mb-4"></div>
        <div className="skeleton skeleton-heading w-full mb-6"></div>
        <div className="skeleton skeleton-text w-3/4 mb-4"></div>
        <div className="skeleton skeleton-text w-2/3"></div>
      </div>

      {/* Service details skeleton */}
      <div className="grid gap-8 lg:grid-cols-2">
        {[1, 2].map((i) => (
          <div key={i} className="skeleton-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="skeleton w-14 h-14 rounded-2xl flex-shrink-0"></div>
              <div className="flex-1">
                <div className="skeleton w-3/4 h-8 mb-3"></div>
                <div className="skeleton w-full h-4 mb-2"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="skeleton w-24 h-4 mb-2"></div>
                <div className="skeleton skeleton-text w-full mb-1"></div>
                <div className="skeleton skeleton-text w-5/6"></div>
              </div>
              <div>
                <div className="skeleton w-24 h-4 mb-2"></div>
                <div className="skeleton skeleton-text w-full mb-1"></div>
                <div className="skeleton skeleton-text w-4/5"></div>
              </div>
              <div>
                <div className="skeleton w-24 h-4 mb-2"></div>
                <div className="skeleton skeleton-text w-full mb-1"></div>
                <div className="skeleton skeleton-text w-5/6"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional content skeleton */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton w-full h-6 mb-4"></div>
            <div className="skeleton skeleton-text w-full mb-2"></div>
            <div className="skeleton skeleton-text w-5/6 mb-2"></div>
            <div className="skeleton skeleton-text w-4/5"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

