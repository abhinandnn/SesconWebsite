"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Sescon Builders Pvt Ltd",
//   description: "",
// };

export default function RootLayout({ children }) {
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  return (
    <html lang="en">
      <body className={`w-screen min-h-screen ${inter.className}`}>
        <Navbar />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          {children}
       
        <Footer />
         </motion.div>
      </body>
    </html>
  );
}
