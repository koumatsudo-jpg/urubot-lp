import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UruBot - AIでThreads運用を自動化",
  description:
    "投稿生成、競合分析、スコアリング、スケジュール投稿。UruBotがあなたのThreads運用をまるごと自動化します。",
  metadataBase: new URL("https://urubot.app"),
  openGraph: {
    title: "UruBot - AIでThreads運用を自動化",
    description:
      "投稿生成、競合分析、スコアリング、スケジュール投稿。UruBotがあなたのThreads運用をまるごと自動化します。",
    type: "website",
    url: "https://urubot.app",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "UruBot" }],
  },
  twitter: {
    card: "summary",
    title: "UruBot - AIでThreads運用を自動化",
    description:
      "投稿生成、競合分析、スコアリング、スケジュール投稿。UruBotがあなたのThreads運用をまるごと自動化します。",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
