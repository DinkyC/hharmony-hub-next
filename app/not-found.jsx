import { Permanent_Marker } from "next/font/google";
import Button from "./components/Button";

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function NotFound() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between px-[5vw]">
        <div className="flex flex-col h-screen items-center justify-center">
          <h1 className={`${permanentMarker.className} font-bold text-[184px]`}>
            404
          </h1>
          <p className="text-center text-xl font-bold pb-4">
            Oops! Page Not Found.
          </p>
          <p className="text-center text-lg pb-8">
            The page you are looking for does not exist
          </p>
          <Button text="Go Back Home" />
        </div>
      </main>
    </>
  );
}
