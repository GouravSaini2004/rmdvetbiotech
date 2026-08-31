export default function AnimalCategories() {
  const animals = [
    { name: "Cattle", icon: "🐄" },
    { name: "Buffalo", icon: "🐃" },
    { name: "Goat", icon: "🐐" },
    { name: "Sheep", icon: "🐑" },
    { name: "Pig", icon: "🐖" },
    { name: "Poultry", icon: "🐔" },
    { name: "Dog & Cat", icon: "🐾" },
    { name: "Horse", icon: "🐎" },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-bold text-xs sm:text-base tracking-wider mb-2">
            COMPLETE ANIMAL HEALTH SOLUTIONS FOR
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-green-900">
            Every animal, every farm
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
          {animals.map((animal) => (
            <div
              key={animal.name}
              className="flex flex-col items-center justify-center bg-white border border-gray-300 rounded-2xl shadow-sm hover:shadow-md transition-shadow py-8 px-4 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-3xl mb-4">
                {animal.icon}
              </div>
              <span className="text-green-950 text-sm tracking-wide">
                {animal.name.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}