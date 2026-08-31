
export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl animate-pulse">

        {/* Back button skeleton */}
        <div className="mb-6 h-5 w-24 rounded bg-gray-200" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Image skeleton */}
          <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-white p-6 shadow-sm">
            <div className="h-[350px] w-full rounded-xl bg-gray-200" />
          </div>

          {/* Product information skeleton */}
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

            {/* Category */}
            <div className="mb-4 h-5 w-28 rounded bg-gray-200" />

            {/* Product name */}
            <div className="mb-6 h-10 w-3/4 rounded bg-gray-200" />

            {/* Description */}
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-5/6 rounded bg-gray-200" />
              <div className="h-4 w-4/6 rounded bg-gray-200" />
            </div>

            {/* Details */}
            <div className="mt-8 space-y-4">
              <div className="h-5 w-40 rounded bg-gray-200" />
              <div className="h-5 w-52 rounded bg-gray-200" />
              <div className="h-5 w-44 rounded bg-gray-200" />
            </div>

            {/* Button */}
            <div className="mt-8 h-12 w-full rounded-lg bg-gray-200" />
          </div>

        </div>
      </div>
    </main>
  );
}

