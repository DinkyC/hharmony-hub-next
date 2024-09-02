import Container from "@/app/components/Container"
import { Card, Stat, Pagination } from "@/app/components";

export default function Pets() {
   return (
        <>
            <section className="flex flex-col items-center justify-center py-12">
                <div className="mt-11  w-[86vw] shadow rounded-lg bg-gray-300 text-center">
                    <h1 className="pb-2 pt-3 font-bold text-4xl">Pet Products</h1>
                    <p className="my-4 mx-9 font-medium leading-8">
                       Explore our selection of unique pet products across multiple categories.
                        We hope to provide your dogs and cats with the treats they need and want.
                    </p>
                </div>
                <Container classNames="grid grid-cols-1 lg:grid-cols-2 content-center items-center justify-items-center justify-evenly pt-4">
                   <Card 
                    title="Cat Chews"
                    desc={"Crafted specifically for cats to provide a natural and holistic approach to their well-being."}
                    photo="/ht-cat-chew.webp"
                    PhotoSize="lg:h-[45vh] w-auto"
                    alt="cat chews"
                    >
                        <Stat value="$21.99" title="Price" />
                   </Card>
                 <Card 
                    title="Dog Chews"
                    desc={"Crafted specifically for dogs to provide a natural and holistic approach to their well-being."}

                    photo="/ht-dog-chew.webp"
                    PhotoSize="lg:h-[45vh] w-auto"
                    alt="dog chews"
                    >
                        <Stat value="$21.99" title="Price" />
                   </Card>
                 <Card 
                    title="Catnip"
                    desc={"Indulge your cat with this premium Catnip, crafted from the finest, all-natural herbs for a truly 'elevated' experience."}

                    photo="/ht-catnip.webp"
                    PhotoSize="pt-2 h-[40vh] w-auto md:h-[50vh] lg:h-[40vh]"
                    alt="catnip"
                    >
                        <Stat classNames="" value="$11.99" title="Price" />
                   </Card>
                 <Card 
                    title="Cat Food"
                    desc={"Expertly formulated for cats, our recipe offers a natural and balanced approach to enhancing your cats health."}

                    photo="/ht_cat_food_no_bg.avif"
                    PhotoSize="lg:h-[45vh] w-auto"
                    alt="cat food"
                    >
                        <Stat value="$49.99" title="Price" />
                   </Card>
                 <Card 
                    title="Dog Food"
                    desc={"Expertly crafted for dogs, our formula provides a natural and balanced approach to boosting your dog's health."}

                    photo="/ht_dog_food.avif"
                    PhotoSize="lg:h-[45vh] w-auto"
                    alt="dog food"
                    >
                        <Stat value="$49.99" title="Price" />
                   </Card>
                </Container>
                <Pagination page={1} classNames="mt-10" />
            </section>
        </>
   ); 
}
