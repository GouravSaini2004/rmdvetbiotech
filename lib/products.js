// lib/getProducts.js

/**
 * Fetches the lightweight product list (name, tagline, category, size, image)
 * from the API. Used by both the public Products page and the Admin Panel list.
 */
export default async function getProducts() {
  try {
    const res = await fetch("/api/admin/seeproduct", {
      cache: "no-store", // always get fresh data, not a stale cached response
    });
    const data = await res.json();

    if (!data.success) {
      throw new Error(data.msg || "Failed to fetch products.");
    }

    return data.data;
  } catch (error) {
    console.error("getProducts error:", error);
    return [];
  }
}

/**
 * Fetches full details for a single product by ID.
 * Used by the product detail page ("View Details").
 */
// export async function getProductById(id) {
//   try {
//     const res = await fetch(`/api/products/${id}`, {
//       cache: "no-store",
//     });
//     const data = await res.json();

//     if (!data.success) {
//       throw new Error(data.msg || "Failed to fetch product.");
//     }

//     return data.data;
//   } catch (error) {
//     console.error("getProductById error:", error);
//     return null;
//   }
// }