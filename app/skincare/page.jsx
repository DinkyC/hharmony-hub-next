import { Card, Stat, Pagination, Container } from "@/app/components";

export default function Pets() {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-12">
        <div className="mt-11  w-[86vw] shadow rounded-lg bg-gray-300 text-center">
          <h1 className="pb-2 pt-3 font-bold text-4xl">Skincare Products</h1>
          <p className="my-4 mx-9 font-medium leading-8">
            Explore our collection of unique skincare products designed to
            rejuvenate and nourish your skin. We aim to provide you with the
            care and hydration your skin deserves.
          </p>
        </div>
        <Container classNames="grid grid-cols-1 lg:grid-cols-2 content-center items-center justify-items-center justify-evenly pt-4">
          <Card
            title="Skincare Pack"
            desc={
              "A skincare line enriched with antioxidants and CBD, designed for hydration and rejuvenation. Includes: face wash, moisturizer and hand and body lotion."
            }
            photo="/ht_skincare_pack.webp"
            PhotoSize="lg:h-[45vh] w-auto"
            alt="skincare pack"
          >
            <Stat value="$19.99" title="Price" />
          </Card>
          <Card
            title="Sunscreen"
            desc={
              "A CBD-infused sunscreen offering superior sun protection while nourishing your skin."
            }
            photo="/ht_sunscreen.webp"
            PhotoSize="lg:h-[45vh] w-auto"
            alt="sunscreen"
          >
            <Stat value="$8.99" title="Price" />
          </Card>
          <Card
            title="Tattoo Cream"
            desc={
              "A dermatologist-recommended tattoo cream designed to soothe, protect, and restore dry, cracked, or irritated skin."
            }
            photo="/ht_tattoo_cream.webp"
            PhotoSize="lg:h-[45vh] w-auto"
            alt="tattoo cream"
          >
            <Stat value="$9.99" title="Price" />
          </Card>
        </Container>
        <Pagination page={1} classNames="mt-10" />
      </section>
    </>
  );
}
