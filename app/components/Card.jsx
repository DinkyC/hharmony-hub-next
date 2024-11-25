import { Permanent_Marker } from "next/font/google";
import Link from "next/link";
const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Card({ category, price, title, desc }) {
  const slug = title
    .replace(/\b\w/g, (char) => char.toLowerCase())
    .replaceAll(" ", "_");


  return (
    <div className="card mt-10 w-[22rem] lg:w-[30vw] h-[60vh] glass bg-dark-red">
      <div className="flex flex-col justify-center items-center">
        <h1
          className={`${permanentMarker.className} py-4 text-5xl`}
        >
          High Times<sup className="p-1 text-[1.5rem]">™</sup>
        </h1>

        <h2 className="mb-8 lg:mb-4 mt-0 card-title text-2xl p-1 text-center">
          {title}
        </h2>
      </div>
      <div className="h-30 lg:h-5 card-body">
        <p className="text-xl text-center">{desc}</p>
        <div className="card-actions justify-center">
          <span className="pb-2 text-2xl font-bold">{price}</span>
          <Link
            className="btn w-full bg-red-400 text-white text-lg hover:bg-red-700"
            href={`/category/${category}/product/${slug}`}
          >
            <button>See Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
