// app/layout.tsx
import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-spectral",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AllBat-Bat",
  description: "Solutions de rénovation modernes pour maisons et appartements",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
    shortcut: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="emotion-insertion-point" content="" />
      </head>
      <body
        className={`${spectral.variable} bg-gray-200`}
        style={{ fontFamily: "var(--font-spectral)" }}
      >
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
