const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? "/wyc-engine-dashboard-demo" : "",
  assetPrefix: isGithubPages ? "/wyc-engine-dashboard-demo/" : ""
};

export default nextConfig;
