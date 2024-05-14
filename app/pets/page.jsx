import Container from "@/app/components/Container"
import { Card, Stat } from "@/app/components";

export default function Pets() {
   return (
        <>
            <section className="flex flex-col items-center justify-center py-12">
                <Container classNames="grid grid-cols-1 lg:grid-cols-2 content-center items-center justify-items-center justify-evenly pt-4">
                   <Card 
                    title="Cat Chews"
                    desc={"Crafted specifically for cats to provide a natural and holistic approach to their well-being. " +
                         "These chews offer a delicious and calming experience, promoting relaxation and overall health for your furry friend."}
                    photo="/cat-chews.png"
                    alt="cat chews"
                    >
                        <Stat value="$29.99" title="Price" />
                   </Card>
                 <Card 
                    title="Cat Chews"
                    desc={"Crafted specifically for cats to provide a natural and holistic approach to their well-being. " +
                         "These chews offer a delicious and calming experience, promoting relaxation and overall health for your furry friend."}
                    photo="/cat-chews.png"
                    alt="cat chews"
                    >
                        <Stat value="$29.99" title="Price" />
                   </Card>
                 <Card 
                    title="Cat Chews"
                    desc={"Crafted specifically for cats to provide a natural and holistic approach to their well-being. " +
                         "These chews offer a delicious and calming experience, promoting relaxation and overall health for your furry friend."}
                    photo="/cat-chews.png"
                    alt="cat chews"
                    >
                        <Stat value="$29.99" title="Price" />
                   </Card>
                </Container>
            </section>
        </>
   ); 
}
