import "./globals.css";

const siteUrl = "https://tanmay-dev.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tanmay Kumar Mallick | Software Developer Portfolio",
    template: "%s | Tanmay Kumar Mallick",
  },
  description:
    "Professional portfolio showcasing software development projects, backend development, and cybersecurity interests.",
  keywords: [
    "Tanmay Kumar Mallick",
    "Software Developer",
    "Backend Developer",
    "Cybersecurity Enthusiast",
    "BCA Student",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Tanmay Kumar Mallick" }],
  creator: "Tanmay Kumar Mallick",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Tanmay Kumar Mallick | Software Developer Portfolio",
    description:
      "Explore Tanmay's software development, backend, AI security, and cybersecurity projects.",
    url: siteUrl,
    siteName: "Tanmay.dev",
    images: [
      {
        url: "/assets/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Tanmay Kumar Mallick portfolio preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Kumar Mallick | Software Developer Portfolio",
    description:
      "Software development, backend engineering, and cybersecurity portfolio.",
    images: ["/assets/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050506",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
