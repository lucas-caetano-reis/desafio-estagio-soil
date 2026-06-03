import clsx from "clsx";

import ContactLinks from "@/components/ContactLinks";

type ContactSectionProps = {
  onClose: () => void;
};

export default function ContactSection({
  onClose,
}: Readonly<ContactSectionProps>) {
  return (
    <section className="bg-[#a5bf55] py-2">
      <h2
        className={clsx(
          "border-b border-white px-4 pb-2",
          "text-lg sm:text-2xl md:text-3xl font-bold",
        )}
      >
        Informações de Contato
      </h2>

      <ContactLinks
        listClassName={clsx("space-y-2 px-4 pt-2")}
        textClassName={clsx("text-sm sm:text-base md:text-lg font-medium")}
        iconClassName={clsx("h-3.5 w-3.5", "sm:h-4 sm:w-4", "md:h-4.5 md:w-4.5")}
        onItemClick={onClose}
      />
    </section>
  );
}
