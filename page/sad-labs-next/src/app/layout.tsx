import type { Metadata } from "next";
import { Outfit, Raleway } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "SAD Labs",
  description:
    "SAD Labs researches how AI systems influence human decision-making, with a focus on preserving human agency in high-stakes contexts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}
