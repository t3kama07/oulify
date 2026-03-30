import { toAbsoluteUrl } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: toAbsoluteUrl("/en"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: toAbsoluteUrl("/en/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: toAbsoluteUrl("/en/careers"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: toAbsoluteUrl("/fi"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: toAbsoluteUrl("/fi/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: toAbsoluteUrl("/fi/careers"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
