import Image from "next/image";
import styles from './styles/style.css';
import { Form, Steps, Product, Hero, Divider } from "./components";

export default function Home() {
  let ogPhotoSize = "w-[65vw] h-[35vh] sm:h-[55vh] lg:w-[70vw] lg:h-[75vh] xl:w-[45vw] xl:h-[75vh]"
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
            photo="/cat-chews.png"
            photoSize={ogPhotoSize}
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
            photo="/dog-chews.png"
            photoSize={ogPhotoSize}
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
            photoSize="w-[65vw] h-[35vh] sm:h-[38vh] sm:w-[45vw] lg:w-[70vw] lg:h-[65vh] xl:w-[45vw] xl:h-[65vh]"
        />
        <Product 
            brand="High Times"
            title="Beer"
            descr={"Experience the crisp refreshment of High Times Beer (6 pack), a craft brew with a bold hop profile and a clean finish."}
            bene1="Bold"
            bene2="Crisp"
            bene3="Hoppy"
            bene4="Refreshing"
            price="$19.99"
            isAlt={true}
            photo="/ht-beer.png"
            photoSize="w-[50vw] h-[35vh] sm:h-[40vh] sm:w-[30vw] md:w-[30vw] lg:w-[35vw] lg:h-[65vh] xl:w-[28vw] xl:h-[65vh]"
        />
        <Product 
            brand="High Times"
            title="Hard Cider"
            descr={"Indulge in the crisp, fruity essence of High Times Hard Cider (6 pack), a refreshing beverage made from orchard-fresh apples."}
            bene1="Crisp"
            bene2="Fruity"
            bene3="Bright"
            bene4="Juicy"
            price="$19.99"
            isAlt={false}
            photo="/ht-hard-cider.png"
            photoSize="w-[30vw] h-[35vh] sm:h-[35vh] sm:w-[20vw] md:w-[20vw] lg:w-[23vw] lg:h-[55vh] xl:w-[18vw] xl:h-[58vh]"
        />
        <Product 
            brand="High Times"
            title="Liqueur"
            descr={"Discover the smooth sophistication of High Times Liqueur, a versatile blend of fine spirits infused with rich flavors."}
            bene1="Smooth"
            bene2="Rich"
            bene3="Versatile"
            bene4="Luxurious"
            price="$25.99"
            isAlt={true}
            photo="/ht-liqueur.png"
            photoSize="w-[40vw] h-[30vh] sm:h-[35vh] sm:w-[30vw] md:w-[25vw] lg:w-[35vw] lg:h-[60vh] xl:w-[23vw] xl:h-[58vh]"
        />
        <Product 
            brand="High Times"
            title="Mezcal"
            descr={"Dive into the heart of tradition with High Times Mezcal, an artisanal spirit with a smoky finish, crafted from 100% agave."}
            bene1="Robust"
            bene2="Earthy"
            bene3="Authentic"
            bene4="Smoky"
            price="$39.99"
            isAlt={false}
            photo="/ht-mezcal.png"
            photoSize="w-[75vw] h-[35vh] sm:h-[40vh] sm:w-[40vw] md:w-[35vw] lg:w-[45vw] lg:h-[65vh] xl:w-[35vw] xl:h-[63vh]"
        />
        <Product 
            brand="High Times"
            title="Tequila"
            descr={"Savor the vibrant spirit of Mexico with High Times Tequila, a smooth, premium silver tequila perfect for sipping or cocktails."}
            bene1="Crisp"
            bene2="Lively"
            bene3="Pure"
            bene4="Zesty"
            price="$49.99"
            isAlt={true}
            photo="/ht-tequila.png"
            photoSize="w-[75vw] h-[35vh] sm:h-[40vh] sm:w-[40vw] md:w-[35vw] lg:w-[45vw] lg:h-[65vh] xl:w-[35vw] xl:h-[63vh]"
        />
        <Product 
            brand="High Times"
            title="Wine"
            descr={"Enjoy the elegance of High Times Wine, a beautifully balanced blend that pairs perfectly with both celebration and relaxation."}
            bene1="Refined"
            bene2="Floral"
            bene3="Plush"
            bene4="Velvety"
            price="$15.99"
            isAlt={false}
            photo="/ht-wine.png"
            photoSize="w-[75vw] h-[35vh] sm:h-[37vh] sm:w-[35vw] md:w-[35vw] lg:w-[40vw] lg:h-[57vh] xl:w-[30vw] xl:h-[60vh]"
        />
        <Product 
            brand="High Times"
            title="Mead"
            descr={"Relish the rich heritage of High Times Mead, an ancient honey wine that's both sweet and complex."}
            bene1="Golden"
            bene2="Rich"
            bene3="Traditional"
            bene4="Sweet"
            price="$19.99"
            isAlt={true}
            photo="/ht-mead.png"
            photoSize="w-[90vw] h-[35vh] sm:h-[40vh] sm:w-[42vw] md:w-[40vw] lg:w-[40vw] lg:h-[65vh] xl:w-[40vw] xl:h-[68vh]"
        />
        <Divider text="How to Buy"/>
        <Steps/>
        <Divider text="Get Hermonious!"/>
        <span className="-m-8 pb-24 sm:text-lg md:text-xl xl:text-3xl">Purchase One of Our Many Products</span>
        <Form/>
    </main>
  );
}

