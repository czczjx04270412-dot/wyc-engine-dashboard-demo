import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WYC Engine 交易看板 Demo",
  description: "用于 WYC Capital 前端实习投递的 Next.js 内部交易看板 Demo。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
