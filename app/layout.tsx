import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Loader from "@/components/ui/loader";
import { absoluteUrl, siteConfig, socialImage } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.shortName} Portfolio`,
  keywords: [
    "Ryan Paul R. Palomo",
    "Ryan Paul Palomo",
    "Ryan Palomo",
    "Full Stack Developer Philippines",
    "Shopify Developer Philippines",
    "Next.js Developer",
    "React Developer",
    "SaaS Developer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: `${siteConfig.shortName} Portfolio`,
    type: "website",
    locale: "en_PH",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [socialImage],
  },
  category: "technology",
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.shortName,
      alternateName: `${siteConfig.shortName} Portfolio`,
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile-page`,
      url: siteConfig.url,
      name: siteConfig.title,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      mainEntity: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      alternateName: ["Ryan Paul Palomo", "Ryan Palomo"],
      url: siteConfig.url,
      image: absoluteUrl("/PIC.JPG"),
      email: `mailto:${siteConfig.email}`,
      telephone: "+63 956 409 3738",
      jobTitle: "Full Stack Developer",
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressCountry: "PH",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Polytechnic University of the Philippines",
      },
      knowsAbout: [
        "Full Stack Web Development",
        "Shopify Development",
        "SaaS Development",
        "Next.js",
        "React",
        "Node.js",
      ],
      sameAs: [siteConfig.github, siteConfig.linkedin],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Loader />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
