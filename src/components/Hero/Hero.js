import Image from "next/image";
import Cta from "../Cta/Cta";
import "./style.scss";

export default function Hero({ title, description, image, cta }) {
  return (
    <section className="hero relative w-full h-[500px] flex items-end justify-center">
      <div className="hero__background absolute w-full h-[500px]">{image && <Image src={image} alt="" fill sizes='100vw' priority className="hero__background-image object-cover" />}</div>
      <div className="hero__overlay absolute w-full h-[80%] bottom-0 left-0 right-0 z-1"></div>
      <div className="hero__content z-2 w-full flex flex-col items-center max-w-std m-x-auto gap-4 text-center p-8">
        <h1 className="hero__title">{title}</h1>
        <p className='max-w-[800px]'>{description}</p>
        {cta && <Cta text={cta.text} link={cta.link} ariaLabel={cta.ariaLabel} />}
      </div>
    </section>
  );
}
