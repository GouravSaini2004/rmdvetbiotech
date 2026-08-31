// components/WhyTrustUs.jsx
import { Leaf, FlaskConical, ShieldCheck, TrendingUp } from "lucide-react";

export default function WhyTrustUs() {
  const features = [
    {
      icon: Leaf,
      title: "Premium Quality Ingredients",
      description:
        "Every product is carefully developed, tested and made with premium raw materials.",
    },
    {
      icon: FlaskConical,
      title: "Science Backed Formulas",
      description:
        "Formulated with the power of modern scientific research and innovation.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted by Vets & Farmers",
      description:
        "Reliable solutions relied upon by veterinarians and farmers across India.",
    },
    {
      icon: TrendingUp,
      title: "Better Productivity",
      description:
        "Better health, better productivity and a stronger tomorrow for your animals.",
    },
  ];

  return (
    <section className="w-full bg-green-950 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          Why farmers trust RMD Vet Biotech
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-yellow-500 flex items-center justify-center mb-6">
                  <Icon size={26} className="text-green-950" strokeWidth={2.5} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}