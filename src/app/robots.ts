import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://hellencristinap.github.io";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot"],
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",          // ChatGPT / OpenAI
          "Claude-Web",      // Claude / Anthropic
          "PerplexityBot",   // Perplexity AI
          "YouBot",          // You.com
          "CCBot",           // Common Crawl (base de dados de IA)
          "anthropic-ai",    // Anthropic genérico
          "Applebot-Extended", // Apple Intelligence
        ],
        allow: ["/", "/habilidades", "/projetos", "/carreira", "/sobre-mim", "/contato"],
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
