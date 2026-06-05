"use client";

import clsx from "clsx";

import { products } from "@/data/Products/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsCarousel() {
  return (
    <div className={clsx("mt-12", "w-full max-w-7xl")}>
      <div
        className={clsx(
          "overflow-x-auto",
          "scroll-smooth",
          "snap-x snap-mandatory",
          "no-scrollbar",
          "py-4",
        )}
      >
        <div className={clsx("flex flex-row flex-nowrap", "w-max gap-6")}>
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
