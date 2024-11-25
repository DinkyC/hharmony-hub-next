import { Form, Steps, Product, Hero, Divider } from "./components";
import { lookUpByCat } from "./utils/actions";
import React from "react";
import Link from "next/link";

export default async function Home() {
  let ogPhotoSize =
    "w-[65vw] h-[35vh] sm:h-[55vh] lg:w-[70vw] lg:h-[75vh] xl:w-[45vw] xl:h-[75vh]";
  const categories = [
    "Non-Alcoholic Beverages",
    "Pet Products",
    "Alcohol",
    "Smoking Products",
    "Confectionery",
    "Skincare",
  ];

  const data = await Promise.all(
    categories.map(async (cat) => {
      const dt = await lookUpByCat(cat, 2);
      return dt;
    }),
  );
  return (
    <>
      <Hero />
      {data.map((cat, i) => {
        return (
          <React.Fragment key={cat.category}>
            <Divider key={i} text={cat.category} />
            {cat.products.map((product, index) => {
              const benefits = product.benefits.split(", ");
              if (index == 1) {
                return (
                  <>
                    <Product
                      key={index}
                      title={product.title}
                      descr={product.description}
                      bene1={benefits[0] || ""}
                      bene2={benefits[1] || ""}
                      bene3={benefits[2] || ""}
                      bene4={benefits[3] || ""}
                      price={product.price}
                      isAlt={index % 2 === 0}
                      photoSize={ogPhotoSize}
                      category={cat.category.toLowerCase().replace(/\s+/g, "_")}
                    />
                    <Link
                      href={`/category/${cat.category.toLowerCase().replace(/\s+/g, "_")}`}
                      className="text-lg bg-dark-slate btn w-[300px] glass"
                    >
                      <button>More {cat.category}</button>
                    </Link>
                  </>
                );
              }
              return (
                <Product
                  key={index}
                  title={product.title}
                  descr={product.description}
                  bene1={benefits[0] || ""}
                  bene2={benefits[1] || ""}
                  bene3={benefits[2] || ""}
                  bene4={benefits[3] || ""}
                  price={product.price}
                  isAlt={index % 2 === 0}
                  photoSize={ogPhotoSize}
                  category={cat.category.toLowerCase().replace(/\s+/g, "_")}
                />
              );
            })}
          </React.Fragment>
        );
      })}
      <Steps />
      <Divider text="Get Hermonious!" />
      <span className="-m-8 pb-24 sm:text-lg md:text-xl xl:text-3xl">
        Purchase One of Our Many Products
      </span>
      <Form />
    </>
  );
}
