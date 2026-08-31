import { Leaf } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="w-full bg-green-950 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-900 border border-yellow-500/30 text-yellow-400 text-xs sm:text-sm font-bold px-4 py-2 rounded-full mb-6">
          <Leaf size={14} />
          <span className="tracking-wide">
            SCIENCE DRIVEN &middot; NATURE INSPIRED &middot; ANIMAL HEALTH FIRST
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
          About RMD Vet Biotech
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
          RMD Vet Biotech is a dynamic animal health and nutrition company
          dedicated to improving the lives of animals and empowering farmers.
          We deliver innovative, effective and science-backed solutions that
          support the health, productivity and well-being of animals.
        </p>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          Backed by strong research, premium quality ingredients and modern
          manufacturing practices, we offer a wide range of products for
          livestock, poultry, pets and swine. Our mission is to be a trusted
          partner for farmers and pet owners.
        </p>
      </div>
    </section>
  );
}