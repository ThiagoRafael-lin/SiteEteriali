import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

export const metadata = {
  title: "Eteriali",
  description: "Eternizando memorias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lastri.variable} ${sulphur.variable} antialiased`}>
        {/* <UserProvider> */}
        <Header />

        <main>{children}</main>
        <Footer />
        {/* </UserProvider>/ */}
      </body>
    </html>
  );
}
