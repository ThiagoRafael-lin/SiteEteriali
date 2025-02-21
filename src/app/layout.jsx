"use client";

import localFont from "next/font/local";
import "./globals.css";
import { HeaderDefault, HeaderHome } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";
import Head from "next/head";
import { Metadata } from "next";

const lastri = localFont({
  src: "./fonts/Lastri.otf",
  variable: "--font-lastri",
  weight: "100 900",
});
const sulphur = localFont({
  src: "./fonts/SulphurPoint-Regular.ttf",
  variable: "--font-Sulphur",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${lastri.variable} ${sulphur.variable} antialiased no-scrollbar`}
      >
        <Head>
          <link
            rel="icon"
            href="/LogoIconPretoCERTO.svg"
            type="image/svg+xml"
          />
          <title>Sua Aplicação</title>
        </Head>
        <div>{pathname === "/" ? <HeaderHome /> : <HeaderDefault />}</div>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
