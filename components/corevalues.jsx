// components/CoreValues.jsx
import { ShieldCheck, FlaskConical, Handshake, Leaf, Users } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality First",
      description:
        "We never compromise on quality. Every product is carefully developed and tested.",
    },
    {
      icon: FlaskConical,
      title: "Science Backed",
      description:
        "Our products are formulated with the power of scientific research and innovation.",
    },
    {
      icon: Handshake,
      title: "Trust & Integrity",
      description:
        "We believe in honesty, transparency and building long-term relationships.",
    },
    {
      icon: Leaf,
      title: "Animal Welfare",
      description:
        "We are passionate about animal health and their better quality of life.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description:
        "Our customers' success is our priority. We are always here to support you.",
    },
  ];

  return (
    <section className="w-full bg-[#eef1ec] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-bold text-sm tracking-wider mb-2">
            WHAT WE STAND FOR
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900">
            Our Core Values
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                  <Icon size={26} className="text-green-800" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-green-900 text-lg mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}