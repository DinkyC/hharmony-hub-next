import Container from "@/app/components/Container";
import { Card, Stat, Pagination } from "@/app/components";
export default function Smoking() {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-12">
        <div className="mt-11  w-[86vw] shadow rounded-lg bg-gray-300 text-center">
          <h1 className="pb-2 pt-3 font-bold text-4xl">Smoking Products</h1>
          <p className="my-4 mx-9 font-medium leading-8">
            Explore our diverse range of unique smoking products across various
            categories. We aim to provide you with the premium tools and
            accessories you need to enhance your smoking experience.
          </p>
        </div>
        <Container classNames="grid grid-cols-1 lg:grid-cols-2 content-center items-center justify-items-center justify-evenly pt-4">
          <Card
            title="Lighter"
            desc={
              "This lighter blends rugged durability with a sleek, modern design, delivering a reliable and stylish tool that elevates every smoking moment."
            }
            photo="/ht_lighter.webp"
            PhotoSize="h-[40vh] lg:h-[45vh] w-auto"
            alt="lighter"
          >
            <Stat value="$2.99" title="Price" />
          </Card>
          <Card
            title="Ashtray"
            desc={
              "This ashtray combines sleek design with rugged durability, providing a stylish and practical solution for effortless ash disposal"
            }
            photo="/ht_ashtray.webp "
            PhotoSize="pt-2 h-[40vh] w-auto md:h-[50vh] lg:h-[40vh]"
            alt="ashtray"
          >
            <Stat classNames="" value="$14.99" title="Price" />
          </Card>
          <Card
            title="Matches"
            desc={
              "Reliable, quick ignition with a sleek design, perfect for a smooth and effortless smoking experience."
            }
            photo="/ht_matches.webp"
            PhotoSize="h-[25vh] m-20 lg:h-[25vh] -rotate-45 w-auto"
            alt="matches"
          >
            <Stat value="$1.99" title="Price" />
          </Card>
          <Card
            title="Rolling Papers"
            desc={
              "A smooth, even burn with ultra-thin, high-quality sheets, offering the perfect balance of durability and premium smoking experience."
            }
            photo="/ht_papers.webp"
            PhotoSize="lg:h-[45vh] w-auto"
            alt="rolling papers"
          >
            <Stat value="$19.99" title="Price" />
          </Card>
          <Card
            title="Herbal Smoking Blend"
            desc={
              "A carefully crafted mix of natural, aromatic herbs, providing a smooth, tobacco-free alternative for a relaxing and flavorful smoking experience."
            }
            photo="/ht_herbs.webp"
            PhotoSize="lg:h-[40vh] w-auto"
            alt="herbal smoking blend"
          >
            <Stat value="$19.99" title="Price" />
          </Card>
          <Card
            title="Rolling Tray"
            desc={
              "A sleek, spacious surface designed for convenience and easy rolling, keeping your smoking essentials organized in style."
            }
            photo="/ht_tray.webp"
            PhotoSize="m-20 lg:h-[23vh] rotate-12  w-auto"
            alt="rolling tray"
          >
            <Stat value="$29.99" title="Price" />
          </Card>
          <Card
            title="Grinder"
            desc={
              "Precision grinding with sharp teeth and a sexy design, ensuring a smooth, effortless preparation for your herbal blends"
            }
            photo="/ht_grinder.webp"
            PhotoSize="m-4 lg:h-[40vh] w-auto"
            alt="rolling tray"
          >
            <Stat value="$29.99" title="Price" />
          </Card>
          <Card
            title="Smoking Wicks"
            desc={
              "A clean, slow burn with all-natural fibers, enhancing every smoking session with a smooth, chemical-free experience."
            }
            photo="/ht_wicks.webp"
            PhotoSize="m-4 lg:h-[40vh] w-auto"
            alt="wicks"
          >
            <Stat value="$12.99" title="Price" />
          </Card>
          <Card
            title="Bong"
            desc={
              "Sleek design with premium craftsmanship, offering smooth hits and an elevated smoking experience every time."
            }
            photo="/ht_bong.webp"
            PhotoSize="m-4 lg:h-[40vh] w-auto"
            alt="bong"
          >
            <Stat value="$20.99" title="Price" />
          </Card>
          <Card
            title="Filter Tips"
            desc={
              "A smooth draw and enhanced stability, ensuring a cleaner, more enjoyable smoking experience from start to finish"
            }
            photo="/ht_filtertips.webp"
            PhotoSize="lg:h-[40vh] w-auto"
            alt="filter tips"
          >
            <Stat value="$20.99" title="Price" />
          </Card>
          <Card
            title="Hookah"
            desc={
              "Modern design with premium functionality, delivering rich, flavorful clouds for a refined and social smoking experience"
            }
            photo="/ht_hookah.webp"
            PhotoSize="lg:h-[40vh] w-auto"
            alt="hookah"
          >
            <Stat value="$30.99" title="Price" />
          </Card>
          <Card
            title="Vape"
            desc={
              "Sleek design and advanced technology, delivering smooth, flavorful draws for an elevated, on-the-go vaping experience."
            }
            photo="/ht_vape.webp"
            PhotoSize="lg:h-[40vh] w-auto"
            alt="vape"
          >
            <Stat value="$24.99" title="Price" />
          </Card>
          <Card
            title="Vape Pen"
            desc={
              "Innovative technology with ergonomic design, providing smooth, flavorful hits for a premium vaping experience anytime, anywhere."
            }
            photo="/ht_vapor_pen.webp"
            PhotoSize="lg:h-[40vh] w-auto"
            alt="vape pen"
          >
            <Stat value="$20.99" title="Price" />
          </Card>
          <Card
            title="Vape Cartridge"
            desc={
              "Rich, flavorful vapor with optimized airflow and high-quality oils, ensuring a smooth and satisfying vaping experience."
            }
            photo="/ht_cart.webp"
            PhotoSize="lg:h-[40vh] w-auto"
            alt="vape cartridge"
          >
            <Stat value="$29.99" title="Price" />
          </Card>
          <Card
            title="Empty Vape Cartridges"
            desc={
              "A durable design and optimized airflow, ready to be filled with your favorite oils for a smooth, hassle-free vaping experience."
            }
            photo="/ht_empty_cart.webp"
            PhotoSize="lg:h-[40vh] w-auto"
            alt="empty vape cartridge"
          >
            <Stat value="$29.99" title="Price" />
          </Card>
        </Container>
        <Pagination page={1} classNames="mt-10" />
      </section>
    </>
  );
}
