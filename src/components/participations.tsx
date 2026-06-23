import { Band } from "./band";
import mai from "../assets/participants/participant_mai.png";
import comingSoon from "../assets/participants/coming_soon.png";

export const Participations = () => {
  return (
    <section className="bg-brand-bg py-12lg:py-16 mt-15 overflow-hidden">
      <div className="p-5 bg-pink-bg mx-auto max-w-92.5 rounded-t-2xl">
        <h1 className="text-5xl font-thunderhouse font-normal text-tertiary">
          O EVENTO CONTARÁ COM:
        </h1>
      </div>
      <div className="w-[112%] -ml-4 -mt-4">
        <Band />
      </div>
      <div className="flex flex-col items-center -mt-30">
        <div className="w-[90%] relative">
          <img src={mai} className="w-full" alt="Mai" />
          <span className="absolute top-[50%] right-[10%]  text-white">
            <p className="text-4xl font-aeonik">Show completo de</p>{" "}
            <p className="text-7xl font-thunderhouse">MAIARA COELHO</p>
          </span>
        </div>

        <div className="w-[90%] relative ">
          <img
            src={comingSoon}
            className="w-[104%] max-w-none"
            alt="Coming Soon"
          />
          <span className="absolute top-[50%] left-[10%]  text-white">
            <p className="text-4xl font-aeonik">
              UMA{" "}
              <strong className="font-thunderhouse text-7xl">
                ATRAÇÃO NACIONAL
              </strong>{" "}
              <br /> JÁ{" "}
              <strong className="font-thunderhouse text-7xl">CONFIRMADA</strong>
            </p>
          </span>
        </div>

        <div className="w-[90%] grid grid-cols-4 gap-2 -mt-12 -mr-2">
          <div className="bg-primary h-80 p-5 flex rounded-b-2xl">
            <span className="text-xl text-white mt-auto">
              ARTISTAS <br />
              CONVIDADOS DE <br />
              <strong className="text-3xl font-thunderhouse font-normal tracking-[2px]">
                SANTA CATARINA;
              </strong>
            </span>
          </div>
          <div className="bg-primary h-80 p-5 flex rounded-b-2xl">
            <span className="text-xl text-white mt-auto">
              <strong className="text-4xl font-thunderhouse tracking-[2px] font-normal">
                DOIS PALCOS
              </strong>
              <br />
              PARA GARANTIR <br />
              ATRAÇÕES DURANTE <br />
              TODO O EVENTO;
            </span>
          </div>
          <div className="bg-primary h-80 p-5 flex rounded-b-2xl">
            <span className="text-xl text-white mt-auto">
              <strong className="text-4xl font-thunderhouse tracking-[2px] font-normal">
                ESTRUTURA <br />
                TEMÁTICA
              </strong>
              <br />
              INSPIRADA <br />
              NO UNIVERSO <br />
              <strong className="text-4xl font-thunderhouse font-normal tracking-[2px]">
                TEXAS/COUNTRY;
              </strong>
            </span>
          </div>
          <div className="bg-primary h-80 p-5 flex rounded-b-2xl">
            <span className="text-xl text-white mt-auto">
              PRAÇA DE <br />
              ALIMENTAÇÃO,
              <br /> BARES E <br />
              <strong className="text-4xl font-thunderhouse font-normal tracking-[2px]">
                ESPAÇOS <br /> EXCLUSIVOS.
              </strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
