import { Metadata } from "next";
import { siteConfig, getCanonicalUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zimtech Engineering. Contact us for industrial automation, solar installation, embedded systems, training inquiries, or project consultations in Zimbabwe.",
  keywords: [
    "contact Zimtech Engineering",
    "engineering consultation Zimbabwe",
    "automation inquiry Harare",
    "solar installation quote",
    "training registration",
    "project consultation",
  ],
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
  openGraph: {
    title: "Contact Us | Zimtech Engineering",
    description:
      "Get in touch for industrial automation, solar installation, or training inquiries.",
    url: `${siteConfig.url}/contact`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
