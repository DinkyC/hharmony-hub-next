import { lookUpByProduct } from "../utils/actions";
import PayPage from "./PayPage";
import { Permanent_Marker } from "next/font/google";
const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


export default async function Pay({ searchParams }) {
  const { product, category } = searchParams;
  const productInfo = await lookUpByProduct(product, category);
  console.log(productInfo)

  const cost = Number(productInfo.price.replace("$", ""));
  const productName = product
    .replaceAll("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  return (
    <PayPage productPrice={cost}>
      <div className="h-64 lg:h-full lg:w-full px-4 shadow-lg rounded-md flex justify-center items-center flex-col gap-2 mb-6">
        <h1 className={`${permanentMarker.className} text-5xl lg:text-7xl`}>
          High Times<sup className="p-1 text-[1.5rem]">™</sup>
        </h1>
        <p className="text-center text-xl">{productName}</p>
      </div>
    </PayPage>
  );
}
