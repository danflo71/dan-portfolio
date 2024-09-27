import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
     <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dan </h1>
        <p className={styles.description}>
          I'm a Electrical & Computer Engineer in my 4th year of university with experience building embeded systems to front and backend development.
          Reach out to me if you would like to learn more! 
        </p>
        <a href = "mailto:danflores6025@gmail.com" className={styles.contactBtn}>Contact Me</a>
     </div>
    <img 
      src={getImageUrl("hero/Dan_Flores_Headshot-modified.png")} 
      alt="Hero image of me" 
      className={styles.heroImg}
      />
     <div className= {styles.topBlur} />
     <div className= {styles.bottomBlur} />
    </section>
    );
};