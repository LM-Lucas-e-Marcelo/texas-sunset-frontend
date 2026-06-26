import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const TICKET_URL =
  "https://www.pensanoevento.com.br/sitev2/eventos/104149/18-anos-carreira-maiara-coelho";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 ${
        scrolled ? "backdrop-blur-sm bg-black/5" : "bg-transparent"
      }`}
    >
      <img src={logo} alt="Texas Sunset" className="w-32" />

      <button
        onClick={() => window.open(TICKET_URL, "_blank")}
        className="bg-gradient-to-r from-amber-800 to-amber-900 py-2 px-5 rounded-full text-white font-aeonik font-bold text-lg cursor-pointer hover:brightness-110 transition-all"
      >
        COMPRE SEU INGRESSO
      </button>
    </header>
  );
};
