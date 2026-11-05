import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessJsonLd } from "@/components/common/JsonLd";
import { FloatingChatAssistant } from "@/components/common/FloatingChatAssistant";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#174B35",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shreeganeshnursery.com"),
  title: {
    default: "Shree Ganesh Nursery & Farm | Plants & Landscaping in Ahmedabad",
    template: "%s | Shree Ganesh Nursery & Farm",
  },
  description:
    "Shree Ganesh Nursery & Farm is an established plant nursery, landscaping, plant rental and garden maintenance destination on Sindhubhavan Road, Bodakdev, Ahmedabad.",
  keywords: [
    "nursery in Ahmedabad",
    "plants in Ahmedabad",
    "landscaping services in Ahmedabad",
    "garden maintenance Ahmedabad",
    "plant nursery Bodakdev",
    "plant rental Ahmedabad",
    "wholesale plant supplier Gujarat",
    "indoor plants Ahmedabad",
    "Sindhubhavan road nursery",
  ],
  authors: [{ name: "Shree Ganesh Nursery & Farm" }],
  creator: "Shree Ganesh Nursery & Farm",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "64x64", type: "image/png" },
      { url: "/images/brand/logo-icon.png", sizes: "280x280", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/brand/logo-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shreeganeshnursery.com",
    title: "Shree Ganesh Nursery & Farm | Plants & Landscaping in Ahmedabad",
    description:
      "A complete plant, nursery, gardening and landscaping destination serving residential, commercial and wholesale clients from Sindhubhavan Road, Bodakdev, Ahmedabad.",
    siteName: "Shree Ganesh Nursery & Farm",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Shree Ganesh Nursery & Farm Ahmedabad",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/icon.png" />
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-paper text-ink font-sans antialiased selection:bg-pale selection:text-forest">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingChatAssistant />
      </body>
    </html>
  );
}
