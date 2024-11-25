import { Permanent_Marker } from "next/font/google";
import Button from '../../components/Button';

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Success() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between px-[5vw]">
        <div className="flex flex-col h-screen items-center justify-center">
          <h1 className={`${permanentMarker.className} font-bold text-[184px]`}>
            Success!
          </h1>
          <p className="text-center text-xl font-bold pb-4">
            Thank you for purchasing from Harmony Hubspot
          </p>
          <p className="text-center text-lg pb-8">
            Get Harmaronous!
          </p>
          <Button text="Go Back Home" />
        </div>
      </main>
    </>
  );
}
