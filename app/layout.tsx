import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const head = Nunito_Sans({ variable: "--font-head", subsets: ["latin"], weight: ["800", "900"] });
const body = Nunito_Sans({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://r-m-landscaping-gardening-hauling.growlocalvisibility.com"),
  title: "R&M Landscaping Gardening Hauling | Lawn Care, Junk Hauling & Fire Clearance in Bakersfield",
  description:
    "Weekly gardening, yard cleanups, same-day junk hauling, sod installation and fire hazard clearance across Bakersfield, Tehachapi and Kern County. 5.0 stars from 11 Google reviews. Open 7 days. Call (661) 978-9196.",
  openGraph: {
    title: "R&M Landscaping Gardening Hauling | Kern County Yard Care and Hauling",
    description: "Fast, reliable and fairly priced yard care and hauling in Bakersfield and Tehachapi. Call (661) 978-9196.",
    type: "website",
    locale: "en_US",
    images: ["/images/p1.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
