import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book a FREE Chess Demo Class (Ages 5–15) | Upstep Academy",
  description:
    "Try Upstep Academy risk-free — book a FREE demo chess class with FIDE-rated coaches. 1-on-1 session, no credit card needed. Slots fill fast, reserve today.",
  keywords: [
    "chess",
    "online chess classes",
    "chess academy",
    "kids chess",
    "Upstep Academy",
    "Viswanathan Anand",
    "demo class",
  ],
  authors: [{ name: "Upstep Academy" }],
  icons: {
    icon: "https://www.upstepacademy.com/wp-content/uploads/2025/01/UA-Logo-w672h192.png",
  },
  openGraph: {
    title: "Book a FREE Chess Demo Class (Ages 5–15) | Upstep Academy",
    description:
      "Try Upstep Academy risk-free — book a FREE demo chess class with FIDE-rated coaches. 1-on-1 session, no credit card needed.",
    url: "https://www.upstepacademy.com/book-demo/",
    siteName: "Upstep Academy",
    type: "website",
    images: [
      {
        url: "https://www.upstepacademy.com/wp-content/uploads/2025/01/UA-Logo-w672h192.png",
        width: 672,
        height: 192,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a FREE Chess Demo Class (Ages 5–15) | Upstep Academy",
    description:
      "Try Upstep Academy risk-free — book a FREE demo chess class with FIDE-rated coaches.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
