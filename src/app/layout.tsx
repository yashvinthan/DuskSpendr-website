import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "DuskSpendr - Your AI Finance Buddy for Student Life",
  description: "Track every UPI payment, split bills with roommates, and finally understand where your pocket money goes. The ultimate finance app for Indian students.",
  keywords: ["finance app", "students", "UPI tracking", "budget", "expense tracker", "India"],
  openGraph: {
    title: "DuskSpendr - Your AI Finance Buddy",
    description: "Track every UPI payment, split bills with roommates, and finally understand where your pocket money goes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
