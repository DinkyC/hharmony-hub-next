import { Permanent_Marker } from "next/font/google";
import { BuyNow, Accordian } from "../../../../components";
import { lookUpByProduct } from "../../../../utils/actions";
const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default async function ProductPage({ params }) {
  const prod = decodeURIComponent(params.product);
  const category = decodeURIComponent(params.category);
  const product = await lookUpByProduct(prod, category);
  return (
    <section className="flex flex-col items-center justify-center py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-screen p-[5vw] place-items-center">
        <div className="h-64 lg:h-full lg:w-full px-4 shadow-lg rounded-md flex justify-center items-center flex-col gap-6">
          <h1 className={`${permanentMarker.className} text-5xl lg:text-7xl`}>
            High Times<sup className="p-1 text-[1.5rem]">™</sup>
          </h1>
          <h2 className="text-2xl lg:text-4xl text-center">{product.title}</h2>
          <p className="italic text-2xl lg:text-4xl text-green-700 font-bold">
            In Stock
          </p>
        </div>
        <div className="pt-4 lg:w-4/5 flex justify-center items-center flex-col gap-6">
          <p className="text-center text-xl lg:text-2xl">{product.tagline}</p>
          <span className="font-bold text-2xl">{product.price}</span>
          <BuyNow
            category={params.category}
            product={params.product}
          />
          <hr className="border border-black w-full mt-4" />
          <Accordian
            longDesc={product.description}
            dimensions={product.dimensions}
            weight={product.weight}
            quantity={product.quantity}
          />
          <hr className="border border-black w-full" />
        </div>
      </div>
    </section>
  );
}
