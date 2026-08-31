import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide safe, effective and affordable animal health products that improve lives, enhance productivity and build a healthier future for all.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be a leading global animal health company recognized for innovation, quality and commitment to animal welfare and customer trust.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-green-950 flex items-center justify-center mb-6">
                  <Icon size={26} className="text-yellow-400" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-extrabold text-green-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}