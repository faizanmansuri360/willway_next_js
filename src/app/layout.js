import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "@/styles/willwayone.css";
import "@/styles/willwaytwo.css";
import "@/styles/willwaythree.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Providers from "./Providers.jsx";
import Header from "@/common/header/Header";
import Footer from "@/common/footer/Footer";

import ScriptLoader from "@/ScriptLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Willway Biotech Co. Ltd',
  description: 'Willway Biotech. Dedicated to transforming innovation for enriching lives in veterinary healthcare.',
  icons: {
    icon: '/will.png',
  },
  metadataBase: new URL('https://www.willwaybiotech.com/'),
  alternates: {
    canonical: '/',
  },
  robots: 'index, follow',
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="bubbles_wrap">
          <div className="bubble x1"></div>
          <div className="bubble x2"></div>
          <div className="bubble x3"></div>
          <div className="bubble x4"></div>
          <div className="bubble x5"></div>
          <div className="bubble x6"></div>
          <div className="bubble x7"></div>
          <div className="bubble x8"></div>
          <div className="bubble x9"></div>
          <div className="bubble x10"></div>
        </div>
        <Providers >
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
