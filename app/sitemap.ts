import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rmdvetbiotech.com",
      lastModified: new Date(),
    },
    {
      url: "https://rmdvetbiotech.com/aboutUs",
      lastModified: new Date(),
    },
    {
      url: "https://rmdvetbiotech.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://rmdvetbiotech.com/products",
      lastModified: new Date(),
    },
  ];
}
