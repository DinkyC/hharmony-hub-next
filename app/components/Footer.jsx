import Image from 'next/image';
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer w-screen bg-base-100 text-base-content p-10">
          <aside>
            <Image src="/high_times_logo.svg" alt="High Times Logo" width={100} height={100} />
            <p>
              <b>
                Yota, LLC
              </b>
              <br />
              Licensors of the High Times name in select product categories. 
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Licensing</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertising</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <Link href="/about" className="link link-hover">About us</Link>
            <Link href="/enhancers" className="link link-hover">Enhancers</Link>
            <Link href="#" className="link link-hover">Alcohol</Link>
            <Link href="/pets" className="link link-hover">Pet Products</Link>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <Link href="#" className="link link-hover">Terms of use</Link>
            <Link href="#" className="link link-hover">Privacy policy</Link>
            <Link href="#" className="link link-hover">Cookie policy</Link>
          </nav>
        </footer>

    );
}
