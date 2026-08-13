import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Leura Mobile Physio | High Quality Physiotherapy",
  description: "High quality physiotherapy accessible to your local community. Mobile physio services in Leura and Blue Mountains.",
  keywords: [
    "physiotherapy",
    "mobile physio",
    "Blue Mountains",
    "Leura",
    "physiotherapist",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
