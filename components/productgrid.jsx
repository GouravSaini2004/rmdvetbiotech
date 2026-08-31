// components/ProductGrid.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
// import { notFound } from "next/navigation";


async function getProducts() {
  try {
    const res = await fetch("/api/admin/seeproduct", {
      cache: "no-store",
    });
    const data = await res.json();
    // console.log(data)

    if (!data.success) {
      throw new Error(data.msg || "Failed to fetch products.");
    }
    // console.log("this is all product data")
    // console.log(data.data);
    return data.data;
  } catch (error) {
    console.error("getProducts error:", error);
    return [];
  }
}

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col animate-pulse"
              >
                <div className="w-full aspect-square bg-gray-100" />
                <div className="p-5 flex flex-col flex-1 gap-2">
                  <div className="h-3 w-1/3 bg-gray-100 rounded" />
                  <div className="h-4 w-3/4 bg-gray-100 rounded" />
                  <div className="h-3 w-1/2 bg-gray-100 rounded mb-2" />
                  <div className="h-4 w-1/3 bg-gray-100 rounded mt-auto" />
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-10">
            No products found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="w-full aspect-square bg-gray-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-yellow-600 text-xs font-bold tracking-wider mb-1 uppercase">
                    {product.category}
                  </p>
                  <h3 className="font-bold text-green-900 text-base mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{product.tagline}</p>
                  <Link
                    href={`/products/${product._id}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-green-800 font-bold text-sm hover:gap-2.5 transition-all"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}