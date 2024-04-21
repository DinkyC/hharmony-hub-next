import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header.jsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harmony Hubspot",
  description: "Find the best products to bring you harmony and peace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <Header/>
          {children}
      </body>
    </html>
  );
}
