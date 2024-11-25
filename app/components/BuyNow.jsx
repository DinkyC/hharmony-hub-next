import Link from "next/link";
export default function BuyNow({ product, category }) {
  return (
    <Link
      className="btn w-full bg-red-400 text-white text-lg hover:bg-red-700"
      href={`/pay?product=${product}&category=${category}`}
    >
      <button>Buy Now</button>
    </Link>
  );
}
