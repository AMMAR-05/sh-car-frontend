import NewsCards from "../components/NewsCards";
import Styles from "../styles/Home.module.css";
import image_1 from "../public/car.jpg";

export default function Home() {
  return (
    <main className={Styles.a}>
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

      <section className={`${Styles.news}   `}>
        <h2>Unsere Empfelungen</h2>
        <div
          className={`${Styles.news__cards}   flex space-x-10 sm:space-x-20 px-8 sm:px-16 overflow-x-scroll scrollbar-hide`}
        >
          <NewsCards
            image={image_1}
            title="Card 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eveniet!"
          />
          <NewsCards
            image={image_1}
            title="Card 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eveniet!"
          />
          <NewsCards
            image={image_1}
            title="Card 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eveniet!"
          />
          {/* <div className={Styles.scroll_gradient}></div> */}
        </div>
      </section>
    </main>
  );
}
