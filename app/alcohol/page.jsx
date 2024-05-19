import Container from "@/app/components/Container"
import { Card, Stat, Pagination } from "@/app/components";

export default function Alcohol() {
   return (
        <>
            <section className="flex flex-col items-center justify-center py-12">
                <div className="mt-11  w-[86vw] shadow rounded-lg bg-gray-300 text-center">
                    <h1 className="pb-2 pt-3 font-bold text-4xl">Alcoholic Beverages</h1>
                    <p className="my-4 mx-6 lg:mx-9 font-medium leading-8">
                        Discover our curated collection of unique alcoholic beverages across various categories. 
                        We strive to offer you a diverse range of drinks that will delight your palate and elevate your occasions.
                    </p>
                </div>
                <Container classNames="grid grid-cols-1 lg:grid-cols-2 content-center items-center justify-items-center justify-evenly pt-4">
                   <Card 
                    title="Beer"
                    desc={"Experience the crisp refreshment of a pack of lager beer (6 pack), a craft brew with a bold hop profile and a clean finish."}
                    photo="/ht-beer.png"
                    PhotoSize="pt-2 h-[40vh] w-[40vw] md:w-[23vw] lg:w-[13vw]"
                    alt="beer"
                    >
                        <Stat classNames="" value="$19.99" title="Price" />

                   </Card>
                 <Card 
                    title="Hard Cider"
                    desc={"Indulge in the crisp, fruity essence of a cold hard cider (6 pack), a refreshing beverage made from orchard-fresh apples."}
                    photo="/ht-hard-cider.png"
                    alt="hard cider"
                    PhotoSize="pt-3 h-[35vh] w-[30vw] md:w-[18vw] lg:w-[10vw]"
                    >
                        <Stat value="$19.99" title="Price" />
                   </Card>
                 <Card 
                    title="Liqueur"
                    desc={"Discover the smooth sophistication of liqueur, a versatile blend of fine spirits infused with rich flavors."}
                    photo="/ht-liqueur.png"
                    alt="liqueur"
                    PhotoSize="pt-4 h-[40vh] w-[40vw] md:w-[20vw] lg:w-[10vw]"
                    >
                        <Stat value="$25.99" title="Price" />
                   </Card>
                 <Card 
                    title="Mezcal"
                    desc={"Dive into the heart of tradition with Mezcal, an artisanal spirit with a smoky finish, crafted from 100% agave."}
                    photo="/ht-mezcal.png"
                    alt="mezcal"
                    PhotoSize="pt-2 h-[40vh] w-[55vw] md:w-[30vw] lg:w-[15vw]"
                    >
                        <Stat value="$39.99" title="Price" />
                   </Card>
                 <Card 
                    title="Tequila"
                    desc={"Savor the vibrant spirit of Mexico with a smooth, premium silver tequila perfect for sipping or cocktails."}
                    photo="/ht-tequila.png"
                    alt="tequila"
                    PhotoSize="pt-2 h-[40vh] w-[55vw] md:w-[30vw] lg:w-[15vw]"
                    >
                        <Stat value="$49.99" title="Price" />
                   </Card>
                 <Card 
                    title="Wine"
                    desc={"Enjoy the elegance of a pinot noir, a beautifully balanced blend that pairs perfectly with both celebration and relaxation."}
                    photo="/ht-wine.png"
                    alt="wine"
                    PhotoSize="pt-4 h-[35vh] w-[48vw] md:w-[30vw] lg:w-[15vw]"
                    >
                        <Stat value="$15.99" title="Price" />
                   </Card>
                 <Card 
                    title="Mead"
                    desc={"Relish the rich heritage of honey mead, an ancient honey wine that's both sweet and complex."}
                    photo="/ht-mead.png"
                    alt="mead"
                    PhotoSize="pt-2 h-[40vh] w-[65vw] md:w-[45vw] md:h-[50vh] lg:h-[40vh] lg:w-[20vw]"
                    >
                        <Stat value="$19.99" title="Price" />
                   </Card>
                </Container>
                <Pagination page={1} classNames="mt-10" />
            </section>
        </>
   ); 
}
