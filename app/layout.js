import Link from 'next/link';
import styles from './styles/style.css';
import "./globals.css";
import Head from 'next/head';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Container from "./components/Container.jsx";
import Sidebar from "./components/Sidebar.jsx";

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
        <Sidebar />
        <main className="px-4 md:px-16 flex flex-1 min-h-screen flex-col items-center justify-between">
            {children}
            <Footer/>
        </main>
      </body>
    </html>
  );
}
