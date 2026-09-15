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
  title: "Book a Chess Demo Class (Ages 5–15) | ChessKidsNation",
  description:
    "Try ChessKidsNation risk-free - book a demo chess class with FIDE-rated coaches. 1-on-1 session, no credit card needed. Slots fill fast, reserve today.",
  keywords: [
    "chess",
    "online chess classes",
    "chess academy",
    "kids chess",
    "ChessKidsNation",
    "USCF",
    "FIDE",
    "demo class",
  ],
  authors: [{ name: "ChessKidsNation" }],
  icons: {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_PSAbKhT0kaVN8KY2WJsM_Do1pK2tZac6m14-OBVZg&s",
  },
  openGraph: {
    title: "Book a Chess Demo Class (Ages 5–15) | ChessKidsNation",
    description:
      "Try ChessKidsNation risk-free - book a demo chess class with FIDE-rated coaches. 1-on-1 session, no credit card needed.",
    url: "https://www.chesskidsnation.com/book-demo/",
    siteName: "ChessKidsNation",
    type: "website",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_PSAbKhT0kaVN8KY2WJsM_Do1pK2tZac6m14-OBVZg&s",
        width: 225,
        height: 225,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Chess Demo Class (Ages 5–15) | ChessKidsNation",
    description:
      "Try ChessKidsNation risk-free - book a demo chess class with FIDE-rated coaches.",
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
