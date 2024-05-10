import Link from 'next/link';
import "./globals.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export const metadata = {
  title: "Harmony Hubspot",
  description: "Find the best products to bring you harmony and peace",
  icons: {
    icon: "/hhubspot-logo.ico",
    }, 
};



export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body>
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
