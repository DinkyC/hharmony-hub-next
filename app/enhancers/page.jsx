import Container from "@/app/components/Container"
import { Card, Stat, Pagination } from "@/app/components";

export default function Alcohol() {
   return (
        <>
            <section className="flex flex-col items-center justify-center py-12">
                <div className="mt-11  w-[86vw] shadow rounded-lg bg-gray-300 text-center">
                    <h1 className="pb-2 pt-3 font-bold text-4xl">Alcoholic Beverage Terpene Enhancer Kits</h1>
                    <p className="my-4 mx-6 lg:mx-9 font-medium leading-8">
                        Discover our curated collection of unique alcoholic beverage terpene enhancer kits across various categories. 
                        We strive to offer you a diverse range of drinks enhancers that will delight your palate and elevate your occasions.
                    </p>
                </div>
                <Container classNames="grid grid-cols-1 lg:grid-cols-2 content-center items-center justify-items-center justify-evenly pt-4">
                   <Card 
                    title="Terpene Infusion Kit for Mezcal"
                    desc={"Enhance your mezcal with our terpene infusion kit, adding unique, aromatic flavors for a premium experience."}
                    photo="/infused_mezcal_bkg.webp"
                    PhotoSize="pt-2 h-[40vh] w-[55vw] md:w-[30vw] lg:w-[20vw] xl:w-[18vw]"
                    alt="infusion kit"
                    >
                        <Stat classNames="" value="$19.99" title="Price" />

                   </Card>
                 <Card 
                    title="Terpene Infusion Kit for Whiskey"
                    desc={"Elevate your tequila with our terpene infusion kit, creating rich, aromatic profiles for a refined taste."}
                    photo="/infused_whiskey_bkg.webp"
                    alt="infusion kit"
                    PhotoSize="pt-2 h-[40vh] w-[55vw] md:w-[30vw] lg:w-[20vw] xl:w-[18vw]"
                    >
                        <Stat value="$19.99" title="Price" />
                   </Card>
                 <Card 
                    title="Terpene Infusion Kit for Vodka"
                    desc={"Transform your vodka with our terpene infusion kit, infusing smooth, aromatic flavors for an exceptional drink."}
                    photo="/infused_vodka_bkg.webp"
                    alt="infusion kit"
                    PhotoSize="pt-2 h-[40vh] w-[55vw] md:w-[30vw] lg:w-[20vw] xl:w-[18vw]"
                    >
                        <Stat value="$19.99" title="Price" />
                   </Card>
                 <Card 
                    title="Terpene Infusion Kit for Tequila"
                    desc={"Elevate your tequila with our terpene infusion kit, creating rich, aromatic profiles for a refined taste."}
                    photo="/infused_tequila_bkg.webp"
                    alt="infusion kit"
                    PhotoSize="pt-2 h-[40vh] w-[55vw] md:w-[30vw] lg:w-[20vw] xl:w-[18vw]"
                    >
                        <Stat value="$19.99" title="Price" />
                   </Card>
                    </Container>
                <Pagination page={1} classNames="mt-10" />
            </section>
        </>
   ); 
}
