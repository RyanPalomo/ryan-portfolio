import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const routes = ["", "/about", "/projects", "/technologies", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: absoluteUrl(route || "/"),
    changeFrequency: route === "/projects" ? "monthly" : "yearly",
    priority: index === 0 ? 1 : route === "/projects" ? 0.9 : 0.7,
  }));
}
