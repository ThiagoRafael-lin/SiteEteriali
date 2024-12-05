"use client";

import localFont from "next/font/local";
import "./globals.css";
import { HeaderDefault, HeaderHome } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useRouter } from "next/navigation";
import { Metadata } from "@/metadata";

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

<Metadata />;

export default function RootLayout({ children }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body className={`${lastri.variable} ${sulphur.variable} antialiased`}>
        <div>
          {router.pathname === "/" ? <HeaderHome /> : <HeaderDefault />}
        </div>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
