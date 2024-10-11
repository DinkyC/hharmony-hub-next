import { Form, Steps, Product, Hero, Divider } from "./components";

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
            photo="/ht-cat-chew.webp"
            photoSize={ogPhotoSize}
        />
        <Product 
            brand="High Times™"
            title="Calming Dog Chews"
            descr={"Crafted specifically for dogs to provide a natural and holistic approach to their well-being. " + 
                    "These chews offer a delicious and calming experience, " + 
                    "promoting relaxation and overall health for your furry friend."}
            bene1="Calming Effect"
            bene2="Natual Ingredients"
            bene3="Joint Health"
            bene4="Enhanced Wellness"
            price="$21.99"
            isAlt={true}
            photo="/ht-dog-chew.webp"
            photoSize={ogPhotoSize}
        />
        <a href="/pets"><button className="text-lg bg-dark-slate btn btn-wide glass">More Pet Products</button></a>
        <Divider text="Infusion Kits" />
        <Product 
            brand="High Times™"
            title="Terpene Infusion Kit for Mezcal"
            descr={"Enhance your mezcal with our terpene infusion kit, adding unique, aromatic flavors for a premium experience."}
            bene1="Fruity"
            bene2="Smokey"
            bene3="Vivacious"
            bene4="Aromatic"
            price="$19.99"
            isAlt={true}
            photo="/infused_mezcal_bkg.webp"
            photoSize="w-[45vw] h-[35vh] sm:h-[35vh] sm:w-[35vw] md:w-[30vw] lg:w-[33vw] lg:h-[55vh] xl:w-[25vw] xl:h-[58vh]"
        />
        <Product 
            brand="High Times™"
            title="Terpene Infusion Kit for Whiskey"
            descr={"Elevate your whiskey with our terpene infusion kit, creating rich, aromatic profiles for a refined taste."}
            bene1="Crisp"
            bene2="Fruity"
            bene3="Bright"
            bene4="Juicy"
            price="$19.99"
            isAlt={false}
            photo="/infused_whiskey_bkg.webp"
            photoSize="w-[45vw] h-[35vh] sm:h-[35vh] sm:w-[35vw] md:w-[30vw] lg:w-[33vw] lg:h-[55vh] xl:w-[25vw] xl:h-[58vh]"
        />
        <a href="/enhancers"><button className="text-lg bg-dark-slate btn btn-wide glass">More Enhancer Kits</button></a>
        <Divider text="Alcoholic Beverages" />
        <Product 
            brand="High Times™"
            title="Mezcal"
            descr={"Discover the rich, smoky essence of our handcrafted mezcal, crafted from the finest agave for an authentic and unforgettable taste experience."}
            bene1="Floral"
            bene2="Citrusy"
            bene3="Jalapeno"
            bene4="Aromatic"
            price="$30.99"
            isAlt={true}
            photo="/ht-mezcal-hero.webp"
            photoSize="w-auto h-[35vh] sm:h-[35vh] lg:h-[55vh] xl:h-[58vh]"
        />
        <Product 
            brand="High Times™"
            title="Lager (12 Pack)"
            descr={"Experience the crisp, refreshing taste of our premium lager beer, brewed to perfection for your ultimate enjoyment."}
            bene1="Crisp"
            bene2="Mellow"
            bene3="Malty"
            bene4="Refreshing"
            price="$15.99"
            isAlt={false}
            photo="/ht-beer.webp"
            photoSize="w-auto h-[35vh] sm:h-[35vh]  lg:h-[55vh]  xl:h-[58vh]"
        />
        <a href="/alcohol"><button className="text-lg bg-dark-slate btn btn-wide glass">More Alcoholic Beverages</button></a>
        <Divider text="Smoking Products" />
        <Product 
            brand="High Times™"
            title="Ashtray"
            descr={"This ashtray combines sleek design with rugged durability, providing a stylish and practical solution for effortless ash disposal"}
            bene1="Functional"
            bene2="Resilient"
            bene3="Iconic"
            bene4="Premium"
            price="$10.99"
            isAlt={false}
            photo="/ht_ashtray.webp"
            photoSize="w-auto h-[35vh] sm:h-[35vh]  lg:h-[55vh]  xl:h-[58vh]"
        />
        <Product 
            brand="High Times™"
            title="Lighter"
            descr={"This lighter blends rugged durability with a sleek, modern design, delivering a reliable and stylish tool that elevates every smoking moment."}
            bene1="Durable"
            bene2="Sleek"
            bene3="Reliable"
            bene4="Stylish"
            price="$2.99"
            isAlt={true}
            photo="/ht_lighter.webp"
            photoSize="w-auto h-[35vh] sm:h-[35vh]  lg:h-[55vh]  xl:h-[58vh]"
        />
        <a href="/smoking"><button className="text-lg bg-dark-slate btn btn-wide glass">More Smoking Products</button></a>
        <Divider text="How to Buy"/>
        <Steps/>
        <Divider text="Get Hermonious!"/>
        <span className="-m-8 pb-24 sm:text-lg md:text-xl xl:text-3xl">Purchase One of Our Many Products</span>
        <Form/>
    </>
  );
}

