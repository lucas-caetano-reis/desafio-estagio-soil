import ContactSection from "@/components/SideBar/ContactSection";
import MenuSection from "@/components/SideBar/MenuSection";

type SideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SideBar({
  isOpen,
  onClose,
}: Readonly<SideBarProps>) {
  return (
    <div
      className={`
        fixed inset-0 z-50 transition-opacity duration-300
        ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }
      `}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <aside
        id="side-bar"
        className={`
          absolute right-0 top-0 h-full w-2/3 bg-[#2f3b1d] text-white shadow-2xl
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ContactSection onClose={onClose} />

        <MenuSection onClose={onClose} />
      </aside>
    </div>
  );
}
