import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  themeColor: "#2D2A4E",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://flyingbirdtours.com"),
  title: {
    default: "Flying Bird Tours Sri Lanka | #1 Chauffeur & Private Island Tours",
    template: "%s | Flying Bird Tours Sri Lanka"
  },
  description: "Book Flying Bird Tours for top-rated Sri Lanka private tours, luxury chauffeur transport, and custom island travel. Rated 5.0 Stars on TripAdvisor. Call/WhatsApp: +94 76 044 8292.",
  applicationName: "Flying Bird Tours",
  keywords: [
    "Flying Bird Tours",
    "Flying Bird Tours Sri Lanka",
    "Flying Bird Tours TripAdvisor",
    "Flying Bird Tours Colombo",
    "Sri Lanka Tours", 
    "Luxury Travel Sri Lanka", 
    "Sri Lanka Tour Packages", 
    "Private Driver Sri Lanka", 
    "Best Travel Agency Sri Lanka",
    "Sri Lanka Chauffeur Service",
    "Boutique Tours Sri Lanka",
    "Island Experiences Sri Lanka"
  ],
  authors: [{ name: "Flying Bird Tours" }],
  creator: "Flying Bird Tours",
  publisher: "Flying Bird Tours",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.svg" },
      { url: "/logo.svg", media: "(prefers-color-scheme: dark)" }
    ],
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Flying Bird Tours Sri Lanka | #1 Rated Chauffeur & Island Tours",
    description: "Experience Sri Lanka in true luxury with Flying Bird Tours. 5.0 Star rated on TripAdvisor. Instant WhatsApp booking (+94 76 044 8292).",
    images: [{ url: "/logo-premium.png", width: 1200, height: 630, alt: "Flying Bird Tours Sri Lanka" }],
    type: "website",
    locale: "en_LK",
    siteName: "Flying Bird Tours",
    url: "https://flyingbirdtours.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flying Bird Tours Sri Lanka | #1 Rated Island Tours",
    description: "Unlock the magic of Sri Lanka with Flying Bird Tours. Rated 5.0 on TripAdvisor.",
    images: ["/logo-premium.png"],
    creator: "@flyingbirdtours",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://flyingbirdtours.com/#website",
      "url": "https://flyingbirdtours.com",
      "name": "Flying Bird Tours",
      "description": "Sri Lanka Private Chauffeur & Island Tour Specialist",
      "publisher": {
        "@id": "https://flyingbirdtours.com/#organization"
      }
    },
    {
      "@type": "TravelAgency",
      "@id": "https://flyingbirdtours.com/#organization",
      "name": "Flying Bird Tours",
      "alternateName": "Flying Bird Tours Sri Lanka",
      "image": "https://flyingbirdtours.com/logo-premium.png",
      "logo": "https://flyingbirdtours.com/logo-premium.png",
      "url": "https://flyingbirdtours.com",
      "telephone": "+94760448292",
      "priceRange": "$$",
      "currenciesAccepted": "USD, EUR, GBP, AUD, LKR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "areaServed": {
        "@type": "Country",
        "name": "Sri Lanka"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Colombo Western Province",
        "addressLocality": "Colombo",
        "addressRegion": "Western Province",
        "postalCode": "00100",
        "addressCountry": "LK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 6.9271,
        "longitude": 79.8612
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "184",
        "bestRating": "5",
        "worstRating": "1"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.tripadvisor.com/Attraction_Review-g293962-d15147226-Reviews-Flying_Bird_Tours-Colombo_Western_Province.html",
        "https://www.linkedin.com/in/flying-bird-tours-8597261a7/",
        "https://wa.me/94760448292"
      ]
    }
  ]
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
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-navy selection:bg-purple selection:text-white">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>

    </html>
  );
}



