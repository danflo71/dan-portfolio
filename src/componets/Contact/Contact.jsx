import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";
export const Contact =() => {
    return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
         </div>
         <ul className={styles.links}>
            <li className={styles.link}>
                <img 
                    src={getImageUrl("contact/emailIcon.png")} 
                    alt="Email icon"/>
                <a href="mailto:danflores6025@gmail.com">danflores6025@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img 
                    src={getImageUrl("contact/linkedinIcon.png")} 
                    alt="LinkedIn icon"/>
                <a href="https://www.linkedin.com/in/dansflores/">linkedin.com/in/dansflores/</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
                <a href="mailto:https://github.com/danflo71">github.com/danflo71</a>
            </li>
        </ul>
    </footer>
    );
}