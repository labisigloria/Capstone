
import styles from './Header.module.css'
import { Link } from "react-router-dom";


function Header() {
    return(
        <header>
            <div>
                <img src='./images/Frame 1618868277.png' alt="logo" className='logo' />
            </div>
            <nav className= {styles.nav}>
                <ul className= {styles.ul}>
                    <li><Link to="/" className={styles.a}>Home</Link></li>
                    <li><a className={styles.a} href="#">About Us</a></li>
                    <li><a className={styles.a} href="#">Events Calendar</a></li>
                    <li><Link to="/Admission.jsx" className={styles.a} >Admissions</Link></li>
                    <li><a className={styles.a} href="#">Blog</a></li>
                    <li><a className={styles.a} href="#">Contact Us</a></li>
                    <li><a className={styles.a} href="#">Resources</a></li>
                </ul>
            </nav>
            <nav-bar>
                <ul className= {styles.login}>
                    <li><Link to="/Login" className= {styles.aLogin}>Login</Link></li>
                    <li><a href="#"><button className= {styles.btn}>Get Started</button></a></li>
                </ul>
            </nav-bar>
        </header>
    );
}

export default Header