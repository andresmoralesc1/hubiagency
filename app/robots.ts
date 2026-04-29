import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/store/checkout"],
      },
    ],
    sitemap: "https://hubiagency.com/sitemap.xml",
  };
}