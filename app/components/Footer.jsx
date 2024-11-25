import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer w-screen bg-base-100 text-base-content p-10">
      <aside>
        <Image
          src="/high_times_logo.svg"
          alt="High Times Logo"
          width={100}
          height={100}
        />
        <p>
          <b>Yota, LLC</b>
          <br />
          Licensor of the High Times<sup className="text-[.6rem]">™</sup>{" "}
          brand in select product categories.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link">Branding</a>
        <a className="link">Licensing</a>
        <a className="link">Marketing</a>
        <a className="link">Advertising</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="/category/skincare" className="link link-hover">
          Skincare
        </Link>
        <Link href="/category/smoking_products" className="link link-hover">
          Smoking Products
        </Link>
        <Link href="/category/confectionery" className="link link-hover">
          Confectionary
        </Link>
        <Link href="/category/alcohol" className="link link-hover">
          Alcohol
        </Link>
        <Link href="/category/pet_products" className="link link-hover">
          Pet Products
        </Link>
      </nav>
    </footer>
  );
}
