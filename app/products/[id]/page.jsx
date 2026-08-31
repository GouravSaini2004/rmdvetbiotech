// app/products/[id]/page.jsx
import { notFound } from "next/navigation";
import ProductDetail from "../../../components/productsdetails";

async function getProduct(id) {
  const res = await fetch(`https://rmdvetbiotech.vercel.app/api/admin/detailsproduct/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.success ? data.data : null;
}

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
