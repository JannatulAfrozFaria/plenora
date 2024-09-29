// "use client";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";
import { PageWrapper } from "./PageWrapper";
// import ClientAOS from '../components/ClientAOS';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
// AOS.init();

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Plenora Architects",
  description: "Interior and Exterior Design Firm",
};

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);
  return (
    <html lang="en" data-theme="plenoraTheme" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar></Navbar>
            {/* <PageWrapper> */}
               {children}
            {/* </PageWrapper> */}
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
