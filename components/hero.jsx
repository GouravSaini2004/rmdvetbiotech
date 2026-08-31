// components/Hero.jsx
import Link from "next/link";
import { Leaf, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[750px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('/herobg.png')",
    backgroundPosition: "center",
  }}
/>

      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-900/80 to-green-900/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-green-950 text-xs sm:text-sm font-bold px-2 py-2 rounded-full mb-6">
            <Leaf size={16} />
            <span className="tracking-wide">
              SCIENCE DRIVEN &middot; NATURE INSPIRED &middot; ANIMAL HEALTH FIRST
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Innovative solutions for{" "}
            <span className="text-yellow-400">healthier animals</span>, higher
            productivity &amp; a better tomorrow.
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-base sm:text-sm mb-8 max-w-xl">
            RMD Vet Biotech is a dynamic animal health and nutrition company
            delivering effective, science-backed products for livestock,
            poultry, swine and companion animals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-green-950 font-bold px-6 py-3.5 rounded-full transition-colors"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/aboutUs"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-full transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
