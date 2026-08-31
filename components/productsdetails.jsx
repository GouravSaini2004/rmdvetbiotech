// components/productsdetails.jsx
"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle, Check, Leaf } from "lucide-react";

export default function ProductDetail({ product }) {
  // console.log(product);
  // if(product){

  // }
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        {/* Back Link */}
<Link
  href="/products"
  className="mb-4 mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-2 py-2 font-medium text-white hover:bg-sky-600 transition-colors"
>
  <ArrowLeft size={18} />
  Back to Products
</Link>
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - Image */}
          <div className="lg:sticky lg:top-24 lg:self-start bg-[#f7f8f5] rounded-3xl border border-gray-100 overflow-hidden flex items-center justify-center p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-sm object-contain"
            />
          </div>

          {/* Right - Info */}
          <div>
            <span className="inline-block bg-green-50 text-green-800 text-xs font-bold tracking-wider px-3 py-1.5 rounded-full mb-4 uppercase">
              {product.category} &middot; {product.size}
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-2">
              {product.name}
            </h1>
            <p className="text-yellow-600 font-bold text-lg mb-5">
              {product.tagline}
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {product.description}
            </p>

            {/* <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-green-950 font-bold px-6 py-3.5 rounded-full transition-colors mb-10"
            >
              <MessageCircle size={18} />
              ENQUIRY
              <ArrowRight size={18} />
            </Link> */}
            <button
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-green-950 font-bold px-6 py-3.5 rounded-full transition-colors mb-10"
            onClick={()=>{
              const phone = "919467005060";
              const messahe = `Hello, I want to know about ${product.name}`;
              window.open(
                `https://wa.me/${phone}?text=${encodeURIComponent(messahe)}`,
                "_blank"
              );
            }}
            >
              ENQUIRY ON WHATSAPP
            </button>

            {/* Key Benefits */}
            {product.benefits?.length > 0 && (
              <>
                <h2 className="text-2xl font-extrabold text-green-900 mb-4">
                  Key Benefits
                </h2>
                <div className="space-y-3 mb-10">
                  {product.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 border border-gray-100 rounded-xl px-4 py-4 shadow-sm"
                    >
                      <div className="w-7 h-7 rounded-full bg-green-800 flex items-center justify-center shrink-0">
                        <Check size={14} className="text-white" strokeWidth={3} />
                      </div>
                      <p className="text-gray-700 text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Ideal For */}
            {product.idealFor?.length > 0 && (
              <>
                <h2 className="text-2xl font-extrabold text-green-900 mb-4">
                  Ideal For
                </h2>
                <div className="flex flex-wrap gap-3 mb-8">
                  {product.idealFor.map((animal, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 bg-green-50 text-green-900 text-sm font-semibold px-4 py-2 rounded-full"
                    >
                      <Leaf size={14} className="text-green-700" />
                      {animal}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-300 rounded-xl px-5 py-4">
              <p className="text-yellow-800 text-sm font-medium">
                Animal Feed Supplement &middot; Not for human / medicinal use.
                Use as directed or under veterinary advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
