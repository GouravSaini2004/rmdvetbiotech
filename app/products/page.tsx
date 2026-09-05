import type { Metadata } from "next";
import ProductsHero from "../../components/productHero";
import ProductGrid from "../../components/productgrid";

export const metadata: Metadata = {
  title: "Animal Health Products | RMD Vet Biotech",
  description:
    "Explore RMD Vet Biotech's animal health and nutrition products for cattle, buffalo, goat, poultry, swine, and companion animals.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductGrid />
    </>
  );
}
