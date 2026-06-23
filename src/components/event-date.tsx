import logo from "../assets/logo.png";

export const EventDate = () => {
  return (
    <section className="bg-tertiary px-4 py-6 md:px-8 md:pb-8 md:pt-14">
      <div className="grid grid-cols-[1fr_1fr] items-center justify-around ">
        <img className="w-100 mx-auto" src={logo} alt="" />
        <span className="text-white">
          <span className="text-3xl mr-2">O</span>
          <span className="font-thunderhouse text-5xl mr-2">TEXAS SUNSET</span>
          <span className="text-3xl">
            SERÁ UM EVENTO <br /> ESPECIAL PARA CELEBRAR OS
          </span>{" "}
          <span className="text-5xl font-thunderhouse mr-2">
            18 ANOS <br /> DE CARREIRA DA MAIARA COELHO
          </span>
          <span className="text-3xl">
            , COM <br /> MAIS DE 10 HORAS DE PROGRAMAÇÃO
          </span>
        </span>
      </div>
      <div className="p-2 mt-10 -mb-16.25 flex gap-10 items-center justify-center">
        <span className=" font-normal px-10 py-2 bg-pink-bg rounded-full text-tertiary text-4xl font-thunderhouse flex items-center justify-center max-w-60">
          INÍCIO: 13H
        </span>
        <span className="px-5 py-2 bg-pink-bg rounded-full text-tertiary text-4xl font-thunderhouse font-normal flex items-center justify-center max-w-140">
          ENCERRAMENTO PREVISTO: 00H
        </span>
      </div>
    </section>
  );
};
