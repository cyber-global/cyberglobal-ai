import { NextResponse } from "next/server";
export function GET() {
  return new NextResponse(`User-agent: *\nAllow: /\nSitemap: https://cybergl.ai/sitemap.xml`, {
    headers: { "content-type": "text/plain" }
  });
}

