import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://zuonaar-cinema-simulator.famous-ridge-2980.chatgpt.site/";
const metadataBase = new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);
const socialImage = new URL("og.png", metadataBase).toString();
const favicon = new URL("favicon.svg", metadataBase).toString();

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "坐哪儿 | 影院视野模拟器",
    template: "%s | 坐哪儿",
  },
  description:
    "按城市、IMAX / 杜比制式、银幕大小和距离选择影院，再从座位人眼视角预览观影体验。",
  icons: {
    icon: favicon,
    shortcut: favicon,
  },
  openGraph: {
    title: "坐哪儿 | 影院视野模拟器",
    description: "先选影院，再看这个座位。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: socialImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "坐哪儿 | 影院视野模拟器",
    description: "先选影院，再看这个座位。",
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
