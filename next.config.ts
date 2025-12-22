import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.jp",
      },
      {
        hostname: "tf3yz7le5r.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
