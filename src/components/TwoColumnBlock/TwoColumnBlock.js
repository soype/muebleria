import Cta from "../Cta/Cta";
import Image from "next/image";

// REQUIRES CTA

// Expects a columns object with 2 columns inside.
// Each column should have:
// title: string
// description: string
// image: string
// id: int
// optional - cta: object
const TwoColumnBlock = ({ content }) => {
  const { image, title, description, cta, mobileReverse = false, reverse = false, id = 1 } = content;

  return (
    <section className="twoColumnBlock">
      <div className={`twoColumnBlock__container max-w-std m-auto p-8 flex ${mobileReverse ? "flex-col-reverse" : "flex-col"} ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 overflow-hidden`}>
        <div className="twoColumnBlock__column column-1  w-full md:w-[50%] h-[300px] md:h-[400px]">
          <div className="twoColumnBlock__image h-full relative flex items-center justify-center">
            {image && <Image height={600} width={600} src={image} alt={title} size={"100vw"} className="z-1 object-cover w-full h-full rounded-xl"></Image>}
          </div>
        </div>
        <div className="twoColumnBlock__column column-2 w-full md:w-[50%]">
          <div className=" twoColumnBlock__content h-full flex flex-col justify-center gap-4">
            <h3>{title}</h3>
            <p>{description}</p>
            {cta && <Cta text={cta.text} link={cta.link} ariaLabel={cta.ariaLabel} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnBlock;
