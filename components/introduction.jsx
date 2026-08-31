// components/Introduction.jsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Introduction() {
  const stats = [
    { value: "10+", label: "Quality Products" },
    { value: "8", label: "Animal Categories" },
    { value: "All India", label: "Supply Available" },
    { value: "100%", label: "Vet Recommended" },
  ];

  return (
    <section className="w-full bg-[#eef1ec] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <p className="text-yellow-600 font-bold text-sm tracking-wider mb-3">
              INTRODUCTION
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-green-900 leading-tight mb-6">
              A trusted partner for farmers &amp; pet owners
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              RMD Vet Biotech is dedicated to improving the lives of animals
              and empowering farmers. We are committed to delivering
              innovative, effective and science-backed solutions that support
              the health, productivity and well-being of animals.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Backed by strong research, premium quality ingredients and
              modern manufacturing practices, we offer a wide range of
              products for livestock, poultry, pets and swine.
            </p>
            <Link
              href="/aboutUs"
              className="inline-flex items-center gap-2 text-green-900 font-bold hover:gap-3 transition-all"
            >
              Learn more about us
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 py-8 px-4 text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-green-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
