import localFont from "next/font/local";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
