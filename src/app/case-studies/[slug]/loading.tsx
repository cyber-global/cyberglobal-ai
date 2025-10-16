export default function CaseStudyLoading() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      {/* Case study hero */}
      <div className="max-w-4xl mb-12">
        <div className="skeleton w-32 h-6 mb-4"></div>
        <div className="skeleton skeleton-heading w-full mb-6"></div>
        <div className="skeleton w-full h-64 rounded-2xl mb-8"></div>
        <div className="skeleton skeleton-text w-3/4 mb-4"></div>
        <div className="skeleton skeleton-text w-2/3"></div>
      </div>

      {/* Challenge & Solution skeleton */}
      <div className="grid gap-8 lg:grid-cols-2 mb-16">
        {[1, 2].map((i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton w-2/3 h-8 mb-4"></div>
            <div className="skeleton skeleton-text w-full mb-2"></div>
            <div className="skeleton skeleton-text w-5/6 mb-2"></div>
            <div className="skeleton skeleton-text w-4/5"></div>
          </div>
        ))}
      </div>

      {/* Results/Metrics skeleton */}
      <div className="skeleton-card">
        <div className="skeleton w-1/3 h-8 mb-8"></div>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center">
              <div className="skeleton w-24 h-12 mb-2 mx-auto"></div>
              <div className="skeleton w-32 h-4 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Outcomes skeleton */}
      <div className="mt-16">
        <div className="skeleton w-1/3 h-8 mb-6"></div>
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="skeleton w-6 h-6 rounded-full flex-shrink-0"></div>
              <div className="skeleton w-full h-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

