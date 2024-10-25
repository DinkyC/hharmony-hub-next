import Container from "@/app/components/Container";
import { Card, Stat, Pagination } from "@/app/components";

export default function Alcohol() {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-12">
        <div className="mt-11  w-[86vw] shadow rounded-lg bg-gray-300 text-center">
          <h1 className="pb-2 pt-3 font-bold text-4xl">
            High Times Confectionary Goods
          </h1>
          <p className="my-4 mx-6 lg:mx-9 font-medium leading-8">
            Discover our curated selection of unique confectionery creations
            across an array of delightful categories. We’re committed to
            bringing you a diverse assortment of treats designed to tantalize
            your taste buds and enhance your sweetest moments.
          </p>
        </div>
        <Container classNames="grid grid-cols-1 lg:grid-cols-2 content-center items-center justify-items-center justify-evenly pt-4">
          <Card
            title="Chocolate Brownies"
            desc={
              "Indulge in rich, decadent chocolate brownies crafted to satisfy every chocolate lover’s craving."
            }
            photo="/ht_brownies.webp"
            PhotoSize="h-[30vh] lg:h-[45vh] w-auto"
            alt="brownies"
          >
            <Stat classNames="" value="$5.99" title="Price" />
          </Card>
          <Card
            title="Chocolate"
            desc={
              "Savor the luxurious taste of our chocolate, crafted to delight with every smooth, velvety bite."
            }
            photo="/ht_choc.webp"
            alt="chocolate"
            PhotoSize="h-[30vh] lg:h-[45vh] w-auto"
          >
            <Stat value="$2.99" title="Price" />
          </Card>
          <Card
            title="Coffee"
            desc={
              "Experience the rich, aromatic flavor of our coffee, brewed to awaken your senses with every sip."
            }
            photo="/ht_coffee.webp"
            alt="coffee"
            PhotoSize="h-[30vh] lg:h-[45vh] w-auto"
          >
            <Stat value="$9.99" title="Price" />
          </Card>
          <Card
            title="Chocolate Chip Cookies"
            desc={
              "Enjoy the classic delight of our chocolate chip cookies, baked to perfection with every warm, gooey bite."
            }
            photo="/ht_cookies.webp"
            alt="chocolate chip cookies"
            PhotoSize="h-[30vh] lg:h-[45vh] w-auto"
          >
            <Stat value="$12.99" title="Price" />
          </Card>
          <Card
            title="Herbal Infusion Tea"
            desc={
              "Relax with our herbal infusion tea, crafted to bring soothing flavors and a touch of calm to every sip."
            }
            photo="/ht_herbal_infuse.webp"
            alt="herbal infusion"
            PhotoSize="h-[30vh] lg:h-[45vh] w-auto"
          >
            <Stat value="$3.99" title="Price" />
          </Card>
          <Card
            title="Honey"
            desc={
              "Taste the pure, golden richness of our honey, a natural sweetness in every smooth drizzle."
            }
            photo="/ht_honey.webp"
            alt="honey"
            PhotoSize="h-[30vh] lg:h-[45vh] w-auto"
          >
            <Stat value="$1.99" title="Price" />
          </Card>
          <Card
            title="Lollipops"
            desc={
              "Delight in the playful sweetness of our lollipops, a burst of fun flavor in every lick."
            }
            photo="/ht_lollipops.webp"
            alt="lollipop"
            PhotoSize="h-[30vh] lg:h-[45vh] w-auto"
          >
            <Stat value="$1.99" title="Price" />
          </Card>
          <Card
            title="Noodles"
            desc={
              "Enjoy the comforting taste of our noodles, crafted to delight with every tender, flavorful bite."
            }
            photo="/ht_noodles.webp"
            alt="noodles"
            PhotoSize="h-[30vh] lg:h-[45vh] w-auto"
          >
            <Stat value="$1.99" title="Price" />
          </Card>
          <Card
            title="Pancakes"
            desc={
              "Savor the fluffy goodness of our pancakes, a warm, golden treat in every delicious bite."
            }
            photo="/ht_pancake.webp"
            alt="pancakes"
            PhotoSize="h-[30vh] lg:h-[45vh] w-auto"
          >
            <Stat value="$9.99" title="Price" />
          </Card>
          <Card
            title="Pizza"
            desc={
              "Savor the irresistible taste of our pizza, a perfect blend of flavors in every satisfying slice."
            }
            photo="/ht_pizza.webp"
            alt="Pizza"
            PhotoSize="h-[30vh] lg:h-[45vh] w-auto"
          >
            <Stat value="$19.99" title="Price" />
          </Card>
          <Card
            title="Hot Sauce"
            desc={
              "Ignite your taste buds with our hot sauce, a bold kick of spice in every drop."
            }
            photo="/ht_sauce.webp"
            alt="hot sauce"
            PhotoSize="h-[30vh] lg:h-[45vh] w-auto"
          >
            <Stat value="$4.99" title="Price" />
          </Card>
          <Card
            title="Maple Syrup"
            desc={
              "Enjoy the sweet richness of our maple syrup, a golden drizzle to enhance your pancakes and waffles with delightful flavor."
            }
            photo="/ht_syrup.webp"
            alt="maple syrup"
            PhotoSize="h-[30vh] lg:h-[45vh] w-auto"
          >
            <Stat value="$4.99" title="Price" />
          </Card>
          <Card
            title="Green Tea"
            desc={
              "Savor the delicate aroma of our green tea, a serene brew to uplift your senses with every sip."
            }
            photo="/ht_tea.webp"
            alt="green tea"
            PhotoSize="h-[30vh] lg:h-[45vh] w-auto"
          >
            <Stat value="$3.99" title="Price" />
          </Card>
          <Card
            title="Waffles"
            desc={
              "Enjoy the warm, golden goodness of our waffles, a delightful blend of crisp and fluffy in every bite."
            }
            photo="/ht_waffles.webp"
            alt="waffles"
            PhotoSize="h-[30vh] pt-2 lg:h-[45vh] w-auto"
          >
            <Stat value="$19.99" title="Price" />
          </Card>
        </Container>
        <Pagination page={1} classNames="mt-10" />
      </section>
    </>
  );
}
