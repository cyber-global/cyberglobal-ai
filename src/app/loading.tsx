export default function Loading() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      {/* Hero skeleton */}
      <div className="max-w-4xl mb-16">
        <div className="skeleton w-32 h-8 mb-6"></div>
        <div className="skeleton skeleton-heading w-full mb-6"></div>
        <div className="skeleton skeleton-text w-3/4 mb-4"></div>
        <div className="skeleton skeleton-text w-2/3 mb-8"></div>
        <div className="flex gap-4">
          <div className="skeleton w-40 h-12 rounded-xl"></div>
          <div className="skeleton w-40 h-12 rounded-xl"></div>
        </div>
      </div>

      {/* Content cards skeleton */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton w-12 h-12 rounded-xl mb-4"></div>
            <div className="skeleton w-3/4 h-6 mb-3"></div>
            <div className="skeleton skeleton-text w-full mb-2"></div>
            <div className="skeleton skeleton-text w-5/6 mb-2"></div>
            <div className="skeleton skeleton-text w-4/5"></div>
          </div>
        ))}
      </div>

      {/* Additional section skeleton */}
      <div className="mt-16">
        <div className="skeleton skeleton-heading w-1/2 mb-8 mx-auto"></div>
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2].map((i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton w-full h-6 mb-3"></div>
              <div className="skeleton skeleton-text w-full mb-2"></div>
              <div className="skeleton skeleton-text w-5/6 mb-2"></div>
              <div className="skeleton skeleton-text w-4/5"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

