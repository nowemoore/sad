import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "/sad",
  assetPrefix: "/sad/",
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;