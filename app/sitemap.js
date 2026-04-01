import { getServiceSitemapEntries } from "@/lib/services";
import { toAbsoluteUrl } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();
  const staticPages = [
    {
      path: "/en",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      path: "/en/about",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/en/careers",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      path: "/en/services",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/en/privacy-policy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      path: "/en/terms-and-conditions",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      path: "/en/refund-policy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      path: "/fi",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/fi/about",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      path: "/fi/careers",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      path: "/fi/services",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/fi/privacy-policy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      path: "/fi/terms-and-conditions",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      path: "/fi/refund-policy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [
    ...staticPages.map((page) => ({
      url: toAbsoluteUrl(page.path),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...getServiceSitemapEntries(lastModified),
  ];
}
