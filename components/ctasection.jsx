// components/CTASection.jsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#eef1ec] border border-yellow-500/40 rounded-3xl px-6 sm:px-12 py-12 sm:py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900 mb-4">
            Ready to give your animals the best?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Talk to our team for product guidance, dosage advice and dealer
            inquiries — all India supply available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-green-900 hover:bg-green-800 text-white font-bold px-6 py-3.5 rounded-full transition-colors w-full sm:w-auto"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-green-900 hover:bg-green-900/5 text-green-900 font-bold px-6 py-3.5 rounded-full transition-colors w-full sm:w-auto"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}