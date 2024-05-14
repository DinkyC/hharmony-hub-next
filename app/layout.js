import Link from 'next/link';
import styles from './styles/style.css';
import "./globals.css";
import Head from 'next/head';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Container from "./components/Container.jsx";

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
      <body className="flex h-[100dvh] flex-col">
        <div>
          <Navbar>
            <Link href="/">
              <span className="font-bold text-lg sm:text-xl md:text-2xl">
                Harmony Hubspot
              </span>
            </Link>
          </Navbar>
        </div>
        <main className="flex-1">
            <Container>{children}</Container>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
