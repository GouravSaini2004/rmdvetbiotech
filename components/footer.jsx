// components/Footer.jsx
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Strip */}
      <div className="bg-green-950 py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <span className="text-yellow-400 font-bold text-xs sm:text-sm tracking-wider">
            HEALTHY ANIMALS
          </span>
          <Leaf size={14} className="text-yellow-400" />
          <span className="text-yellow-400 font-bold text-xs sm:text-sm tracking-wider">
            HAPPY FARMERS
          </span>
          <Leaf size={14} className="text-yellow-400" />
          <span className="text-yellow-400 font-bold text-xs sm:text-sm tracking-wider">
            STRONGER FUTURE
          </span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-green-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {/* Logo & About */}
            <div>
              <div className="inline-flex items-center gap-3 bg-white rounded-xl px-4 py-3 mb-5">
                <Image
              src="/logo.png"
              alt="RMD Vet Biotech"
              width={48}
              height={48}
              className="w-11 h-11 sm:w-12 sm:h-12 object-contain shrink-0"
              priority
            />
                <div className="flex flex-col leading-tight">
                  <span className="font-extrabold text-green-900 text-base">
                    RMD VET BIOTECH
                  </span>
                  <span className="text-yellow-600 text-[10px] font-semibold tracking-wide">
                    SCIENCE FOR ANIMAL HEALTH
                  </span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-xs">
                Science-driven, nature-inspired animal health and nutrition —
                innovative solutions for healthier animals, higher
                productivity and a better tomorrow.
              </p>
              <div className="inline-block border border-yellow-500/50 rounded-full px-4 py-2">
                <span className="text-yellow-400 text-xs font-semibold">
                  Animal Feed Supplement &middot; Not for human / medicinal use
                </span>
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <h4 className="text-yellow-400 font-bold text-sm tracking-wider mb-5">
                EXPLORE
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-200 hover:text-white text-sm transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-200 hover:text-white text-sm transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-200 hover:text-white text-sm transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-200 hover:text-white text-sm transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-yellow-400 font-bold text-sm tracking-wider mb-5">
                CONTACT
              </h4>
              <div className="flex items-start gap-3 mb-4">
                <Phone size={18} className="text-yellow-400 mt-0.5 shrink-0" />
                <div className="flex flex-col text-gray-200 text-sm">
                  <a href="tel:8930924593" className="hover:text-white transition-colors">
                    8930924593
                  </a>
                  <a href="tel:9068730030" className="hover:text-white transition-colors">
                    9467005060
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 mt-0.5 shrink-0" />
                <span className="text-gray-200 text-sm">
                  Bhiwani, Haryana - 127027 (India)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-950 py-5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; 2026 RMD Vet Biotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
