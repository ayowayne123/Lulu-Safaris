import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./Layout/Footer";

const gotham = localFont({
  src: [
    {
      path: "../../public/fonts/GothamLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/GothamBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GothamMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GothamBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-Black.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

const gerhaus = localFont({
  src: [
    {
      path: "../../public/fonts/Gerhaus.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Lulu Safaris",
  description: "Welcome to a world of safaris",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gotham.className}>
        {children}

        <Footer />
      </body>
    </html>
  );
}
