import Styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className={Styles.heroImage}>
      <div className={Styles.hero__container}>
        <div className={Styles.hero__description}>
          <h1 className={Styles.title}>Willkomen Bei SH CAR</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className={Styles.hero__cta}>
          <button className={`${Styles.hero_btn} ${Styles.btn}`}>
            Details
          </button>
          <button className={`${Styles.hero_cars} ${Styles.btn}`}>
            Fahrzeuge
          </button>
        </div>
      </div>
    </section>
  );
}
