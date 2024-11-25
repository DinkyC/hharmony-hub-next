import { Container, Card } from "@/app/components";
import { lookUpByCat } from "../../utils/actions";

export default async function Category({ params }) {
  const productCategory = params.category
    .replaceAll("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  const data = await lookUpByCat(productCategory);
  return (
    <>
      <section className="flex flex-col items-center justify-center py-24 w-screen">
        <h1 className="pb-2 pt-3 font-bold text-5xl text-center">{productCategory}</h1>
        <Container classNames="grid grid-cols-1 lg:grid-cols-2 content-center items-center justify-items-center justify-evenly pt-4">
          {data.products.map((product, index) => {
            return (
              <Card
                category={params.category}
                key={index}
                title={product.title}
                desc={product.tagline}
                price={product.price}
              />
            );
          })}
        </Container>
      </section>
    </>
  );
}
