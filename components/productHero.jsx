import { Leaf } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="w-full bg-green-950 px-16 py-16 sm:py-20">
      <div className="max-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-900 border border-yellow-500/30 text-yellow-400 text-xs sm:text-sm font-bold px-4 py-2 rounded-full mb-6">
          <Leaf size={14} />
          <span className="tracking-wide">COMPLETE ANIMAL HEALTH RANGE</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
          Our Products
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
          Science-backed feed supplements for cattle, buffalo, goat, poultry,
          swine and companion animals. Tap any product to view full benefits,
          dosage and usage.
        </p>
      </div>
    </section>
  );
}