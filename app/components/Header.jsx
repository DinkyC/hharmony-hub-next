import Image from "next/image";

export default function header() {
    return (
      <div className="headerSect">
          <Image src="/Harmony-logo.png" className="logo" alt="Harmony Hubspot Logo" width={500} height={300}/>
          <span>
            Harmony Hubspot
          </span>
      </div>
    );
}
