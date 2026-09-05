// app/products/[id]/page.jsx

import { notFound } from "next/navigation";
import ProductDetail from "../../../components/productsdetails";

async function getProduct(id) {
  const res = await fetch(
    `https://rmdvetbiotech.vercel.app/api/admin/detailsproduct/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.success ? data.data : null;
}

// Dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | RMD Vet Biotech",
    };
  }

  return {
    title: `${product.name} | RMD Vet Biotech`,
    description:
      product.description ||
      `Learn more about ${product.name}, an animal health and nutrition product from RMD Vet Biotech.`,
    alternates: {
      canonical: `/products/${id}`,
    },
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
