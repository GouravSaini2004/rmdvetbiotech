"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default function ProductAdminList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/seeproduct", { cache: "no-store" });
      const data = await res.json();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmed) return;

    try {
      setDeletingId(id);
      const res = await fetch(`/api/admin/detailsproduct/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
      } else {
        alert(data.msg || "Failed to delete product.");
      }
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div>
      {/* Add Product Button */}
      <div className="flex justify-end mb-6">
        <Link
          href="/admin/panel/addproduct"
          className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-bold px-5 py-2.5 rounded-full transition-colors"
        >
          <Plus size={18} />
          Add Product
        </Link>
      </div>

      {/* Loading State */}
     {/* Loading State */}
{loading && (
  <div className="flex flex-col items-center justify-center py-16">
    <div className="w-10 h-10 border-4 border-green-100 border-t-green-600 rounded-full animate-spin mb-4" />

    <p className="text-sm font-medium text-green-800">
      Loading products...
    </p>

    <p className="text-xs text-green-600/70 mt-1">
      Please wait while we fetch your products
    </p>
  </div>
)}

{/* Empty State */}
{!loading && products.length === 0 && (
  <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0l-8 5-8-5m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5"
        />
      </svg>
    </div>

    <h3 className="text-lg font-semibold text-green-900">
      No products yet
    </h3>

    <p className="text-sm text-green-700/70 mt-1 max-w-sm">
      Your product collection is empty. Add your first product to get
      started.
    </p>
  </div>
)}

      {/* Product List */}
      <div className="space-y-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex items-center justify-between border border-gray-200 rounded-xl px-5 py-4"
          >
            <div>
              <h3 className="font-bold text-green-900">{product.name}</h3>
              <p className="text-gray-500 text-sm">
                {product.tagline} &middot; {product.category}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Edit button — not functional yet */}
              

              {/* Delete button — working */}
              <button
                onClick={() => handleDelete(product._id)}
                disabled={deletingId === product._id}
                className="flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 disabled:opacity-50"
              >
                <Trash2 size={16} />
                {deletingId === product._id ? "Deleting..." : "Delete Product"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
