import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Free Consultation | Prestige Accountancy Services",
  description: "Speak with a dedicated accountant at Prestige Accountancy Services. Huddersfield office: 01484 655560, direct mobile & WhatsApp: +44 7949 446368.",
  alternates: {
    canonical: "https://prestigeaccountancy.com/contact",
  },
  openGraph: {
    title: "Contact Prestige Accountancy Services Ltd",
    description: "Book your free consultation with our Huddersfield accounting practice.",
    url: "https://prestigeaccountancy.com/contact",
    images: ["/og-image.png"]
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
