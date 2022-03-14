import React from "react";
import Image from "next/image";
import Styles from "../styles/NewsCards.module.css";

function NewsCards({ image, title, description }) {
  return (
    <section className={`${Styles.card} scrollbar-hide md:scrollbar-default`}>
      <Image className={Styles.card__image} src={image} alt="art-logo" />
      <div className={Styles.card__container}>
        <h2 className={Styles.card__title}>{title}</h2>
        <p className={Styles.card__description}>{description}</p>
      </div>
    </section>
  );
}

export default NewsCards;
