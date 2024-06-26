import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LyraProvider } from "@/utils/lyra";
import "@new-black/lyra/dist/style.css";
import { InlineIcons } from "@/utils/lyra";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-surface-secondary`}>
        <LyraProvider locale="en">
          <div className="flex min-h-dvh">{children}</div>
          <InlineIcons />
        </LyraProvider>
      </body>
    </html>
  );
}
