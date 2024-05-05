import Link from 'next/Link';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harmony Hubspot",
  description: "Find the best products to bring you harmony and peace",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header>
            <Link href="/">
              <span className="font-bold text-lg sm:text-xl md:text-2xl">
                Harmony Hubspot
              </span>
            </Link>

          </Header>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
