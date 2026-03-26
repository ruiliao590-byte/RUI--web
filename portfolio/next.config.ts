import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "RUI--web";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPagesBuild ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
