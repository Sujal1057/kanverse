import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "KANVERSE — Handcrafted Digital Celebration Platforms",
  description:
    "Handcrafted, editorial-quality digital invitation platforms for weddings, anniversaries, galas, and landmark celebrations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-kanverse-bg text-kanverse-text font-sans selection:bg-kanverse-text selection:text-kanverse-bg min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
