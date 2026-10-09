import type { Metadata, Viewport } from "next";
import { Fragment_Mono, Manrope } from "next/font/google";
import { MotionProvider } from "@/components/motion/motion-provider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fragment-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gainz-trading-indicators.vercel.app"),
  title: "GAINZ — Open-source TradingView indicators",
  description:
    "35 TradingView indicators written in Pine Script, free to read, copy and use. Trend, momentum, volatility, volume and levels.",
  openGraph: {
    title: "GAINZ — Open-source TradingView indicators",
    description:
      "35 TradingView indicators written in Pine Script, free to read, copy and use.",
    url: "/",
    siteName: "GAINZ",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fafafa",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fragmentMono.variable} font-sans`}
    >
      <body className="min-h-dvh antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
