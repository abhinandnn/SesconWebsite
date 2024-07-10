import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sescon Builders Pvt Ltd",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`w-screen min-h-screen relative overflow-x-hidden ${inter.className}`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
