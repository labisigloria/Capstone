import styles from './Mission.module.css'

function Mission() {

    return(
        <div className={styles.Mission}>
            <h6 className={styles.h6}>Our core Mission and Vision</h6>
            <div className={styles.missionVision}>
                <img src='./images/Frame 41.png' className={styles.img} />
                <div className={styles.missionCard}>
                    <h3 className={styles.h3}>Our Mission</h3>
                    <p className={styles.p}> At St. Florence Private school, our mission is to empower every student, regardless of background, religion or culture, 
                    with the knowledge and skills to succeed academically and beyond. We envision a future where all children have access to high quality education, laying the foundation for a brighter tomorrow</p>
                    <h3 className={styles.h3}>Our Vision</h3>
                    <p className={styles.p}>Our vision is to provide affordable, accessible education to children. With a focus on innovation and excellence, we continue to evolve our programs
                     and curriculum to meet the diverse needs of our students and prepare them for success in an ever- changing world</p>
                </div>
            </div>
        </div>
    );
}

export default Mission