import hero from "../assets/hero.webp";
import { Band } from "./band";

export const Hero = () => {
  return (
    <section className="flex min-h-screen w-full items-start justify-center overflow-visible overflow-x-hidden pb-20 bg-brand-bg">
      <div className="relative w-full">
        <img
          src={hero}
          alt="Texas Sunset"
          className="block h-auto max-h-screen w-full"
        />

        <div className="absolute bottom-0 left-1/2 w-[120%] -translate-x-1/2 translate-y-1/2">
          <Band />
        </div>
      </div>
    </section>
  );
};
