import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero({ title, description, image }) {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__left}>
          <h1>{title}</h1>
          
        </div>
        <div className={styles.hero__right}>
          {image && <Image src={image} alt="hero" width={500} height={300} />}
        </div>
      </div>
    </section>
  );
}
