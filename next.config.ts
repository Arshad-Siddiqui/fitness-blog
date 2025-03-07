import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  experimental: { appDir: true },
  pageExtensions: ["ts", "tsx", "mdx"]
});