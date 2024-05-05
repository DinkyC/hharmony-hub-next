import Image from "next/image";
import styles from './styles/style.css';
import { Form, Steps, Product, Hero, Divider } from "./components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Divider text="Products" />
        <Product 
            brand="High Times"
            title="Calming Cat Chews"
            descr={"Crafted specifically for cats to provide a natural and holistic approach to their well-being. Infused with high-quality hemp," + 
                    "these chews offer a delicious and calming experience, " + 
                    "promoting relaxation and overall health for your furry friend."}
            bene1="Calming Effect"
            bene2="Natual Ingredients"
            bene3="Joint Health"
            bene4="Enhanced Wellness"
            price="$21.99"
            isAlt={false}
            photo="/HT-Cat-Treats-no-bkg.png"
        />
        <Product 
            brand="High Times"
            title="Calming Dog Chews"
            descr={"Crafted specifically for dogs to provide a natural and holistic approach to their well-being. Infused with high-quality hemp," + 
                    "these chews offer a delicious and calming experience, " + 
                    "promoting relaxation and overall health for your furry friend."}
            bene1="Calming Effect"
            bene2="Natual Ingredients"
            bene3="Joint Health"
            bene4="Enhanced Wellness"
            price="$21.99"
            isAlt={true}
            photo="/HT-Dog-Treats-no-bkg.png"
        />
        <Product 
            brand="High Times"
            title="Catnip"
            descr={"Indulge your cat with High Times Catnip, crafted from the finest, all-natural herbs for a truly 'elevated' experience. " + 
                    "This premium blend delivers a safe, exhilarating high that will have your feline friend purring for more."}
            bene1="Relaxing"
            bene2="Blissful"
            bene3="Mood Boosting"
            bene4="Safe & Edible"
            price="$11.99"
            isAlt={false}
            photo="/catnip.png"
        />
        <Divider text="How to Buy"/>
        <Steps/>
        <Divider text="Get Hermonious!"/>
        <span className="-m-8 pb-24 sm:text-lg md:text-xl xl:text-3xl">Purchase One of Our Many Products</span>
        <Form/>
    </main>
  );
}

