import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  remotePatterns: [{ hostname: "svgl.app" }],
}
};

export default nextConfig;
