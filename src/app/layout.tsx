import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CodBanner } from "@/components/layout/cod-banner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ABC Wood Oil Factory | Premium Natural Wood Oils",
    template: "%s | ABC Wood Oil Factory",
  },
  description:
    "Premium teak, sandalwood, cedarwood and eucalyptus wood oils. Handcrafted in Kerala. Cash on delivery across India.",
  keywords: [
    "wood oil",
    "teak oil",
    "sandalwood oil",
    "natural wood care",
    "ABC Wood Oil",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CodBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
