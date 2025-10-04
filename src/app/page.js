import Hero from "@/components/Hero/Hero";
import ThreeColumnBlock from "@/components/ThreeColumnBlock/ThreeColumnBlock";
import content from "@/content/homepage.json";


export default function Home() {

  return (
    <div className="main">
      <Hero title='Mueblería' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultricies, nunc nisi aliquet nunc, eu tincidunt nisi nisl eu nisl. Aliquam erat volutpat.' image='https://picsum.photos/2000/3000' cta={{text: 'Ver Catalogo', link: '/catalogo', ariaLabel: 'Ver Catalogo'}} />
      <ThreeColumnBlock columns={content.components[1].props.columns} />
    </div>
  );
}
