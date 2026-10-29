import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Free Consultation | Actvise Accountancy Services",
  description: "Speak with a dedicated accountant at Actvise Accountancy Services. Direct office phone & WhatsApp: +44 7949 446368.",
  alternates: {
    canonical: "https://actvise.co.uk/contact",
  },
  openGraph: {
    title: "Contact Actvise Accountancy Services Ltd",
    description: "Book your free consultation with our Huddersfield accounting practice.",
    url: "https://actvise.co.uk/contact",
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
