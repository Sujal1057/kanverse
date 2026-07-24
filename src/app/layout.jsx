import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
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
    <html lang="en">
      <body
        className={`${serif.variable} ${inter.variable} font-sans antialiased bg-kanverse-bg text-kanverse-text selection:bg-kanverse-text selection:text-kanverse-bg min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
