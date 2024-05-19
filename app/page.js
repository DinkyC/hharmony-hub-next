import Image from "next/image";
import styles from './styles/style.css';
import { Container, Form, Steps, Product, Hero, Divider } from "./components";

export default function Home() {
  let ogPhotoSize = "w-[65vw] h-[35vh] sm:h-[55vh] lg:w-[70vw] lg:h-[75vh] xl:w-[45vw] xl:h-[75vh]"
  return (
    <>
        <Hero />
        <Divider text="Pet Products" />
        <Product 
            brand="High Times™"
            title="Calming Cat Chews"
            descr={"Crafted specifically for cats to provide a natural and holistic approach to their well-being. " + 
                    "these chews offer a delicious and calming experience, " + 
                    "promoting relaxation and overall health for your furry friend."}
            bene1="Calming Effect"
            bene2="Natual Ingredients"
            bene3="Joint Health"
            bene4="Enhanced Wellness"
            price="$21.99"
            isAlt={false}
            photo="/ht-cat-chew.png"
            photoSize={ogPhotoSize}
        />
        <Product 
            brand="High Times™"
            title="Calming Dog Chews"
            descr={"Crafted specifically for dogs to provide a natural and holistic approach to their well-being. " + 
                    "these chews offer a delicious and calming experience, " + 
                    "promoting relaxation and overall health for your furry friend."}
            bene1="Calming Effect"
            bene2="Natual Ingredients"
            bene3="Joint Health"
            bene4="Enhanced Wellness"
            price="$21.99"
            isAlt={true}
            photo="/ht-dog-chew.png"
            photoSize={ogPhotoSize}
        />
        <a href="/pets"><button className="text-lg bg-dark-slate btn btn-wide glass">More Pet Products</button></a>
      <Divider text="Alcoholic Beverages" />
        <Product 
            brand="High Times™"
            title="Beer"
            descr={"Experience the crisp refreshment of a pack of lager beer (6 pack), a craft brew with a bold hop profile and a clean finish."}
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
            brand="High Times™"
            title="Hard Cider"
            descr={"Indulge in the crisp, fruity essence of a cold hard cider (6 pack), a refreshing beverage made from orchard-fresh apples."}
            bene1="Crisp"
            bene2="Fruity"
            bene3="Bright"
            bene4="Juicy"
            price="$19.99"
            isAlt={false}
            photo="/ht-hard-cider.png"
            photoSize="w-[30vw] h-[35vh] sm:h-[35vh] sm:w-[20vw] md:w-[20vw] lg:w-[23vw] lg:h-[55vh] xl:w-[18vw] xl:h-[58vh]"
        />
        <a href="/alcohol"><button className="text-lg bg-dark-slate btn btn-wide glass">More Alcoholic Beverages</button></a>
        <Divider text="How to Buy"/>
        <Steps/>
        <Divider text="Get Hermonious!"/>
        <span className="-m-8 pb-24 sm:text-lg md:text-xl xl:text-3xl">Purchase One of Our Many Products</span>
        <Form/>
    </>
  );
}

