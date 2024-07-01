import Container from "@/app/components/Container"
import { Card, Stat, Pagination } from "@/app/components";
export default function Alcohol() {
   return (
    <>
       <section className="flex flex-col items-center justify-center py-24">
            <div className="mt-11  w-[86vw] shadow rounded-lg bg-gray-300 text-center">
                <h1 className="pb-2 pt-3 font-bold text-4xl">Alcoholic Beverages</h1>
                <p className="my-4 mx-9 font-medium leading-8">
                    Explore our curated collection of unique alcoholic beverages across diverse categories, offering the perfect drinks to satisfy your palate and elevate any occasion.
                </p>
            </div>
            <Container classNames="grid grid-cols-1 lg:grid-cols-2 content-center items-center justify-items-center justify-evenly pt-4">
                   <Card 
                    title="Mezcal"
                    desc={"Discover the rich, smoky essence of our handcrafted mezcal, crafted from the finest agave."}
                    photo="/ht-mezcal-hero.webp"
                    PhotoSize="h-[35vh] w-auto sm:h-[45vh] md:h-[55vh] lg:h-[45vh]"
                    alt="mezcal bottl"
                    >
                        <Stat value="$30.99" title="Price" />
                   </Card>
                 <Card 
                    title="Lager"
                    desc={"Experience the crisp, refreshing taste of our premium lager beer, brewed to perfection."}

                    photo="/ht-beer.webp"
                    PhotoSize="h-[35vh] w-auto sm:h-[45vh] md:h-[55vh] lg:h-[45vh]"
                    alt="lager bottle"
                    >
                        <Stat value="$15.99" title="Price" />
                   </Card>
                 <Card 
                    title="Tequila"
                    desc={"Discover our premium tequila selection, crafted to elevate your taste experience."}

                    photo="/ht-tequila.webp"
                    PhotoSize="h-[35vh] w-auto sm:h-[45vh] md:h-[55vh] lg:h-[45vh]"
                    alt="tequila bottle"
                    >
                        <Stat classNames="" value="$49.99" title="Price" />
                   </Card>
                 <Card 
                    title="Hard Cider"
                    desc={"Savor our exceptional hard cider collection, meticulously crafted to elevate your day with every crisp, refreshing sip."}

                    photo="/ht-hard-cider.webp"
                    PhotoSize="pt-5 h-[35vh] w-auto sm:h-[45vh] md:h-[55vh] lg:h-[45vh]"
                    alt="hard cider bottle"
                    >
                        <Stat classNames="" value="$19.99" title="Price" />
                   </Card>
                 <Card 
                    title="Wine"
                    desc={"Exquisite wine expertly curated to enhance your sipping experience and delight your senses."}

                    photo="/ht-wine.webp"
                    PhotoSize="pt-5 h-[35vh] w-auto sm:h-[45vh] md:h-[55vh] lg:h-[45vh]"
                    alt="wine bottle"
                    >
                        <Stat classNames="" value="$15.99" title="Price" />
                   </Card>
                 <Card 
                    title="Liqueur"
                    desc={"Indulge in our refined liqueur, crafted to add a touch of sophistication and flavor to every sip."}

                    photo="/ht-liqueur.webp"
                    PhotoSize="pt-5 h-[35vh] w-auto sm:h-[45vh] md:h-[55vh] lg:h-[45vh]"
                    alt="liqueur bottle"
                    >
                        <Stat classNames="" value="$25.99" title="Price" />
                   </Card>
            </Container>
            <Pagination page={1} classNames="mt-10" />
       </section>
    </>
   ); 
}
