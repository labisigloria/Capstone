import styles from './Footer.module.css'


function Footer() {
    return(
        <footer>
            <div className={styles.newsLetter}>
                <div className={styles.letter}>
                    <h4 className={styles.h4}>Join Our Newsletter</h4>
                    <p>Get all the lates St. Florence Private Schools news<br /> delivered to your inbox.</p>
                </div>
                    <div className={styles.email}><input name="email" placeholder="Email address" className={styles.input}/><button className={styles.btn}>Subscribe</button></div>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.links}>
                <div className={styles.school}>
                    <h6  className={styles.h6}>School</h6>
                    <ul className={styles.ul}>
                        <li><a href="#" className={styles.li}>About Us</a></li>
                        <li><a href="#"  className={styles.li}>Contact Us</a></li>
                        <li><a href="#"  className={styles.li}>Privacy Policy</a></li>
                        <li><a href="#"  className={styles.li}>Terms of Use</a></li>
                    </ul>
                </div>

                <div className={styles.socials}>
                    <h6 className={styles.h6}>Socials</h6>
                    <ul className={styles.ul}>
                        <li><a href="#" className={styles.li}>Facebook</a></li>
                        <li><a href="#" className={styles.li}>Twitter</a></li>
                        <li><a href="#" className={styles.li}>Youtube</a></li>
                    </ul>
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.rights}>
                <div>
                <h4 className={styles.h4}>St. Florence Private School</h4>
                <p className={styles.p}>&copy; 2024 St. Florence Private School. All rights reserved.</p>
                <p className={styles.p}>All trademarks, logos and brand name are the <br /> property of St. Florence Private Schools.</p>
                <ul className={styles.atLast}>
                    <li><a href="#" className={styles.service}>Terms of Service</a></li>
                    <li><a href="#" className={styles.service}>Privacy Policy</a></li>
                    <li><a href="#" className={styles.service}>Security</a></li>
                </ul>
                </div>
                <div className={styles.socialIcons}>
                    <img src='./images/Fb.png' className={styles.socialIcons} />
                    <img src='./images/Tw.png'  className={styles.socialIcons} />
                    <img src='./images/Ig.png' className={styles.socialIcons}  />
                    <img src='./images/Ln.png' className={styles.socialIcons}  />
                </div>
            </div>

        </footer>
    );
}

export default Footer