import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.rmdvetbiotech.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.rmdvetbiotech.com/aboutus",
      lastModified: new Date(),
    },
    {
      url: "https://www.rmdvetbiotech.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.rmdvetbiotech.com/products",
      lastModified: new Date(),
    },
  ];
}
