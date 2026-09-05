import type { Metadata } from "next";


import ContactEnquiry from "../../components/contact";

export const metadata: Metadata = {
  title: "Contact Us | RMD Vet Biotech",
  description:
    "Contact RMD Vet Biotech for animal health and nutrition products, enquiries, and support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <>
      
      <ContactEnquiry />
    </>
  );
}
