import "./globals.css";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import styles from "./styles/style.css";
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
          <Footer />
        </main>
      </body>
    </html>
  );
}
