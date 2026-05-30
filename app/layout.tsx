import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Loader from "@/components/ui/loader";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryan Paul R. Palomo | Full Stack Developer",
  description:
    "A Full Stack Developer crafting modern web solutions — Next.js, React, Node.js, Shopify & more.",
  keywords: ["Ryan Palomo", "Full Stack Developer", "Next.js", "React", "Shopify", "Portfolio"],
  authors: [{ name: "Ryan Paul R. Palomo" }],
  openGraph: {
    title: "Ryan Paul R. Palomo | Full Stack Developer",
    description: "A Full Stack Developer crafting modern web solutions.",
    type: "website",
  },
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
        <Loader />
      </body>
    </html>
  );
}