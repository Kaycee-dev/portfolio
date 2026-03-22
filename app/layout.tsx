import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { Geist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/layout/MotionProvider";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kelechiuba.vercel.app"
  ),
  title: "Kelechi Michael Uba — Data Engineer & Backend Developer",
  description:
    "Senior data engineer and backend developer specialising in financial systems, Oracle pipelines, and automated analytics. Led the 5 for 5 campaign engine at UBA, delivering ₦20B+ in cumulative savings.",
  keywords: [
    "data engineer",
    "backend developer",
    "Oracle",
    "Python",
    "TypeScript",
    "financial systems",
    "UBA",
    "Nigeria",
    "pipeline automation",
    "Next.js",
  ],
  authors: [{ name: "Kelechi Michael Uba" }],
  openGraph: {
    title: "Kelechi Michael Uba — Data Engineer & Backend Developer",
    description:
      "Led analytics systems delivering ₦20B+ in savings. Available for data engineering and backend roles.",
    type: "website",
    locale: "en_GB",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelechi Michael Uba — Data Engineer & Backend Developer",
    description:
      "Led analytics systems delivering ₦20B+ in savings. Available for data engineering and backend roles.",
    images: ["/og"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: process.env.NEXT_PUBLIC_SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${ibmPlexMono.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
