import styles from './Welcome.module.css'


function Welcome (){
    return(
        <div className="section-1">
        <div className={styles.welcome}>
            <h1 className={styles.h1}>Welcome To St.Florence Private School Where Every Child Thrives</h1>
            <p className= {styles.p}>Discover a nurturing environment dedicated to your child’s growth and development. At St. Florence Private School, we blend academic excellence with a supportive community to inspire a livelong love of learning</p>
            <div className={styles.bar}>
                    <img src='./images/lightbulb-02.png' className={styles.icon} />
                    <p className={styles.p2}>Would you like to join us?</p>
                    <img src='./images/marker-pin-06.png' className={styles.icon} />
                    <p className={styles.p2}>Your location</p>
                <button className={styles.btn}>Register Now</button>
            </div>
        </div>
        <img src='./images/Group 2.png' className={styles.image} />
        </div>
    );


}

export default Welcome