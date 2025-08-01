import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/common";
import { siteMeta } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteMeta.metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={siteMeta.canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteMeta.jsonLd),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
