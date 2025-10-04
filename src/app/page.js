import Hero from "@/components/Hero/Hero";
import ThreeColumnBlock from "@/components/ThreeColumnBlock/ThreeColumnBlock";
import TwoColumnBlock from "@/components/TwoColumnBlock/TwoColumnBlock";

import content from "@/content/homepage.json";


export default function Home() {

  const hero = content.components[0];

  return (
    <div className="main">
      <Hero title={hero.props.title} description={hero.props.description} image={hero.props.image} cta={hero.props.cta} />
      <div className='splitter w-full h-[10px] bg-gray-300'></div>
      <ThreeColumnBlock columns={content.components[1].props.columns} />
      <TwoColumnBlock content={content.components[2].content} />
      <TwoColumnBlock content={content.components[3].content} />
    </div>
  );
}
