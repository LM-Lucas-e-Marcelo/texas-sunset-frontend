export const MaiSection = () => {
  return (
    <section className="bg-brand-bg px-6 py-12 md:px-10 lg:px-16 lg:py-16">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr_1fr] lg:gap-10 bg-red-">
        <div>
          <h2 className="font-thunderhouse text-[3.4rem] leading-[0.82] text-primary uppercase">
            Maiara
            <br />
            Coelho
          </h2>

          <p className="mt-5 text-[1rem] leading-[1.15] uppercase text-[#3b241d]">
            Lorem ipsum simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            embaralhou para fazer um livro de modelos de tipos. Lorem ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado. Se
            popularizou na década de 60, quando a Letraset lançou decalques
            contendo passagens de Lorem Ipsum e mais recentemente quando passou
            a ser integrado a softwares de editoração eletrônica como Aldus
            PageMaker.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center rounded-[18px] bg-primary shadow-[0_12px_30px_rgba(0,0,0,0.08)] md:h-95 md:max-w-85">
            <span className="font-aeonik text-lg uppercase tracking-wide text-white md:text-xl">
              FOTOS MAI
            </span>
          </div>

          <div className="mt-4 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
          </div>
        </div>

        <div className="justify-self-start lg:justify-self-end">
          <h3 className="font-thunderhouse text-[4.25rem] leading-[0.82] uppercase text-primary md:text-[5.25rem] lg:text-[7.8rem]">
            Especial
            <br />
            18 anos
            <br />
            de carreira
          </h3>
        </div>
      </div>
    </section>
  );
};
