import type { Metadata } from "next";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Explore Countries",
  description: "Discover countries around the world.",
};

// Shared layout for all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
