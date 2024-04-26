import styles from './Approach.module.css'

function Approach() {

    return(
            <div className= {styles.Approach}>
            <div className={styles.relativeContainer}>
            <img src='./images/Ellipse 1.png' className={styles.ellipse}/>
            <img src='./images/Group 3.png' className={styles.years} /></div>

            <div className={styles.ourApproach}>
                <h6 className={styles.h6}>Our Approach</h6>
                <h2 className={styles.h2}>Our Unique Learning Approach</h2>
                <p className={styles.p}>At St Florence Private School, we believe that education goes beyond textbooks and exams. Our approach to learning is designed to ignite curiosity, inspire creativity,
                and foster a lifelong passion for knowledge. We blend innovative teaching methods with a comprehensive curriculum to provide a holistic learning experience that prepares students for success in the modern world</p>
                <div className={styles.div}><img src='/images/Vector.png' className={styles.img} /><p className={styles.pImg}> <b>Experiential Learning:</b> Through projects, field trips, and interactive activities, students gain a deeper understanding of concepts and develop critical thinking skills.</p></div>
                <div className={styles.div}><img src='/images/Vector.png' className={styles.img} /><p className={styles.pImg}> <b>Personalized Learning:</b> Our approach includes personalized learning plans that cater to individual strengths and challenges, ensuring that each student receives the support and resources they need to thrive academically and personally.</p></div>
                <button className={styles.btn}>Register Now</button>

            </div>
        </div>
    );
}

export default Approach