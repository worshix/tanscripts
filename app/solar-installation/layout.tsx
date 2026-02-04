import { Metadata } from "next";
import { contactConfig } from "@/config/contact";

const siteUrl = "https://zimtechengineering.com";

export const metadata: Metadata = {
  title: `Solar Installation | ${contactConfig.companyName}`,
  description: `Professional solar installation services in Zimbabwe. Inverters, panels, batteries & complete packages from 1.5kVA to commercial scale. Free quotes & expert installation by ${contactConfig.companyName}.`,
  keywords: [
    "solar installation",
    "solar panels Zimbabwe",
    "solar inverter",
    "solar battery",
    "off-grid solar",
    "hybrid solar system",
    "solar geyser",
    "Zimtech Engineering",
    "Harare solar",
  ],
  openGraph: {
    title: `Solar Installation | ${contactConfig.companyName}`,
    description: `Professional solar installation services in Zimbabwe. Complete solar solutions from 1.5kVA to commercial scale.`,
    url: `${siteUrl}/solar-installation`,
    siteName: contactConfig.companyName,
    images: [
      {
        url: `${siteUrl}/images/solar/og-solar.jpg`,
        width: 1200,
        height: 630,
        alt: "Solar Installation by Zimtech Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Solar Installation | ${contactConfig.companyName}`,
    description: `Professional solar installation services in Zimbabwe. Free quotes & expert installation.`,
    images: [`${siteUrl}/images/solar/og-solar.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/solar-installation`,
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
