import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Epstein's Olde Fashioned Pervy Massages",
  description:
    "Est. 1991. Bringing rigour, process, and discretion to a previously unregulated industry. Serving discerning clients worldwide.",
  metadataBase: new URL("https://epsteinsmassage.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-parchment text-navy">
        {children}
      </body>
    </html>
  );
}
