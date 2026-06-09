"use client";

import clsx from "clsx";
import { useState } from "react";

import { products, type Product } from "@/data/Products/products";
import ProductsCarousel from "@/components/ProductsCarousel";
import ProductModal from "@/components/ProductModal";

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal(product: Product) {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  function closeModal() {
    setSelectedProduct(null);
    setIsModalOpen(false);
  }

  return (
    <section
      id="produtos"
      className={clsx(
        "flex flex-col items-center",
        "bg-[#fffdf9] text-[#1b2027]",
        "px-8 py-8",
        "sm:px-12 sm:py-10",
        "md:px-16 md:py-12",
        "lg:px-20 lg:py-14",
      )}
    >
      <header>
        <h2
          className={clsx(
            "text-center",
            "font-bold leading-tight tracking-tight",
            "text-2xl sm:text-3xl md:text-4xl xl:text-5xl",
          )}
        >
          Conheça nossos produtos:
        </h2>
      </header>

      <ProductsCarousel products={products} onOpenModal={openModal} />

      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          product={selectedProduct}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
