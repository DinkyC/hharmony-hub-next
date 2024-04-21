import Image from "next/image";
import styles from './styles/style.css';
import { Hero, Divider } from "./components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Divider text="Products" />
    </main>
  );
}

