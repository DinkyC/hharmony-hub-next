"use server";
import data from "../data/data.json" assert { type: "json" };

export async function lookUpByCat(category: string, limit?: number) {
  const categoryObj = data.find((cat) => cat.category === category);

  if (!categoryObj) {
    return {
      products: [],
      category,
    };
  }

  let products = categoryObj.products;

  if (limit) {
    products = products.slice(0, limit);
  }

  return {
    products,
    category,
  };
}

interface Product {
  title: string;
  slug: string;
  tagline: string;
  price: string;
  description: string;
  dimensions: string;
  weight: string;
  quantity: string;
  benefits: string;
}

export async function lookUpByProduct(slug: string, category?: string) {
  const productSlug = slug.replace(" ", "_").toLowerCase();

  let product: Product | null = null;

  if (category) {
    const productCategory = category
      .replace("_", " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
    const categoryObj = data.find((cat) => cat.category === productCategory);

    if (!categoryObj) {
      return null;
    }

    product =
      categoryObj.products.find((prod) => prod.slug === productSlug) || null;

    return product;
  }

  // Search across all categories when no specific category is provided
  for (const cat of data) {
    product = cat.products.find((prod) => prod.slug === productSlug);
    if (product) break;
  }


  return product || null;
}
