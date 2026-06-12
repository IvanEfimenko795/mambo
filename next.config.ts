import type { NextConfig } from "next";

const repo = "mambo";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jolybell.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jolybell.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;