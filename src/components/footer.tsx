import { FaInstagram, FaYoutube, FaFacebookF } from "../assets/icons";
import mai from "../assets/footer/mai.png";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-brand-bg py-12lg:py-16 mt-10">
      <div className="flex relative">
        <img src={mai} alt="mai" className="max-w-250 -ml-30 z-20" />
        <span className="font-thunderhouse mt-30 -ml-30">
          <span className="text-9xl text-primary">ME CONTA:</span>{" "}
          <span className="text-9xl text-tertiary"> VOCÊS</span> <br />{" "}
          <span className="text-[77px] text-tertiary leading-6">
            PRETENDEM IR EM QUANTAS
          </span>{" "}
          <br />
          <span className="text-tertiary text-[60px] leading-14">
            PESSOAS? TENHO CERTEZA QUE CONSIGO
          </span>{" "}
          <br />{" "}
          <span className="text-tertiary text-[124px] leading-26">
            INDICAR A MELHOR
          </span>{" "}
          <br />{" "}
          <span className="text-tertiary text-[77px] leading-18">
            OPÇÃO PARA O SEU GRUPO! 🤠🔥
          </span>
        </span>
        <div className="absolute flex flex-col bottom-30 right-20 z-40">
          <img src={logo} alt="logo" className="w-100" />
          <div className="flex gap-3 items-center justify-center mt-10">
            <p className="text-2xl text-white">@texassunset_</p>
            <a
              className="h-9 w-9 bg-white rounded-full flex items-center justify-center"
              href="https://www.facebook.com/texassunset_"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              className="h-9 w-9 bg-white rounded-full flex items-center justify-center"
              href="https://www.instagram.com/texassunset_/"
            >
              <FaInstagram size={24} />
            </a>
            <a
              className="h-9 w-9 bg-white rounded-full flex items-center justify-center"
              href="https://www.youtube.com/@texassunset_"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        <div className="h-125 bg-primary w-full absolute bottom-0 z-10" />
      </div>
    </footer>
  );
};
