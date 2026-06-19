import clsx from "clsx";
import { X } from "lucide-react";

import type { Product } from "@/data/Products/products";

type ProductModalProps = {
  onClose: () => void;
  product: Product;
};

export default function ProductModal({
  onClose,
  product,
}: Readonly<ProductModalProps>) {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-50",
        "flex items-center justify-center",
        "bg-black/50 px-4",
      )}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className={clsx(
          "w-full max-w-lg",
          "bg-white",
          "rounded-2xl shadow-xl",
          "px-6 py-6",
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3
            className={clsx(
              "text-[#1b2027]",
              "text-base md:text-lg lg:text-xl xl:text-2xl",
            )}
          >
            {product.title}
          </h3>

          <button
            type="button"
            aria-label="Fechar o modal."
            title="Fechar o modal."
            onClick={onClose}
            className={clsx(
              "inline-flex",
              "h-10 w-10",
              "items-center justify-center",
              "rounded-full",
              "transition-colors hover:bg-gray-300 active:bg-gray-300",
            )}
          >
            <X
              aria-hidden="true"
              className={clsx("h-6 w-6")}
              strokeWidth={2.4}
            />
          </button>
        </div>

        <div className="mt-6 min-h-40 rounded-xl border border-gray-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          odit libero repudiandae quia ut atque molestias. Iusto, pariatur!
          Exercitationem veniam numquam, doloribus nobis aliquid repellendus
          vero. Eius amet nam aliquid.
        </div>
      </div>
    </div>
  );
}
