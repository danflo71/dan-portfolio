import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";


export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")}
                    alt= "Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src = { getImageUrl("about/cursorIcon.png")} alt ="Cursor icon" />
                        <div className={styles.aboutItemsText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with experience in building responsive 
                                and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src = { getImageUrl("about/serverIcon.png")} alt ="Server icon" />
                        <div className={styles.aboutItemsText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experiance developing fast and optimised back end systems 
                               and APIs
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src = { getImageUrl("about/bolt.png")} alt ="UI icon" />
                        <div className={styles.aboutItemsText}>
                            <h3>Electrical Engineer</h3>
                            <p>
                                I have experience creating embeded systems to create interative projects,
                                and creating semiconductors while testing for efficiency. 
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
         
        </section>
    );
};