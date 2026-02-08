import { Metadata } from "next";
import { siteConfig, getCanonicalUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Solar Installation",
  description:
    "Professional solar installation services in Zimbabwe. Solar panels, inverters, batteries, and complete packages from 1.5kVA to commercial scale. Free quotes and expert installation by Zimtech Engineering.",
  keywords: [
    ...siteConfig.keywords.solar,
    "solar installation Harare",
    "off-grid solar Zimbabwe",
    "hybrid solar system",
    "commercial solar installation",
  ],
  alternates: {
    canonical: getCanonicalUrl("/solar-installation"),
  },
  openGraph: {
    title: "Solar Installation | Zimtech Engineering",
    description:
      "Professional solar installation services in Zimbabwe. Complete solar solutions from 1.5kVA to commercial scale.",
    url: `${siteConfig.url}/solar-installation`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/solar/og-solar.jpg",
        width: 1200,
        height: 630,
        alt: "Solar Installation by Zimtech Engineering",
      },
    ],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Installation | Zimtech Engineering",
    description:
      "Professional solar installation services in Zimbabwe. Free quotes & expert installation.",
    images: ["/images/solar/og-solar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SolarInstallationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
