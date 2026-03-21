import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://flyingbirdtours.com"),
  title: "Flying Bird Tours | Premium Sri Lanka Travel Agency",
  description: "Experience the magic of Sri Lanka with Flying Bird Tours. Premium island-wide transport, boutique tours, and authentic cultural experiences.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  keywords: ["Sri Lanka tours", "Sri Lanka car hire with driver", "Sri Lanka travel agency", "luxury Sri Lanka tours", "Sri Lanka heritage tours"],
  authors: [{ name: "Flying Bird Tours" }],
  openGraph: {
    title: "Flying Bird Tours | Premium Sri Lanka Travel Agency",
    description: "Experience the magic of Sri Lanka with Flying Bird Tours.",
    images: [{ url: "/logo-premium.png" }],
    type: "website",
    locale: "en_LK",
    siteName: "Flying Bird Tours",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flying Bird Tours | Premium Sri Lanka Travel Agency",
    description: "Experience the magic of Sri Lanka with Flying Bird Tours.",
    images: ["/logo-premium.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}

