export default function TickerBar() {
  const items = [
    "COMPLETE ANIMAL HEALTH SOLUTIONS",
    "PREMIUM QUALITY INGREDIENTS",
    "SCIENCE BACKED FORMULAS",
    "TRUSTED BY VETS & FARMERS",
    "ALL INDIA DELIVERY",
  ];

  // Duplicate items for seamless infinite scroll
  const marqueeItems = [...items, ...items];

  return (
    <div className="w-full bg-green-900 overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {marqueeItems.map((item, i) => (
          <span
            key={i}
            className="flex items-center text-white text-xs sm:text-sm font-semibold tracking-wider mx-6"
          >
            {item}
            <span className="text-yellow-400 ml-6">🌿</span>
          </span>
        ))}
      </div>
    </div>
  );
}