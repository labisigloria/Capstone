import styles from './Testimonials.module.css'

function Testimonials() {
    return(
        <>
        <h6 className={styles.h6}>Testimonials</h6>
        <h4 className={styles.h4}>What Our Awesome Parents Are Saying</h4>
        <div className={styles.review}>
            <div className={styles.reviewCards}>
                <h4 className={styles.h}>Mrs Johnson.O.</h4>
                <p className={styles.p}>They have a well rounded and robust curriculum. I highly recommend Greater School</p>
                <p className={styles.pImg}><img src='./images/marker-pin-06.png' /> Lagos. Nigeria</p>
            </div>

            <div className={styles.reviewCards}>
                <h4 className={styles.h}>Mrs Johnson.O.</h4>
                <p className={styles.p}>They have a well rounded and robust curriculum. I highly recommend Greater School</p>
                <p className={styles.pImg}><img src='./images/marker-pin-06.png'/> Lagos. Nigeria</p>
            </div>

            <div className={styles.reviewCards}>
                <h4 className={styles.h}>Mrs Johnson.O.</h4>
                <p className={styles.p}>They have a well rounded and robust curriculum. I highly recommend Greater School</p>
                <p className={styles.pImg}><img src='./images/marker-pin-06.png' /> Lagos. Nigeria</p>
            </div>

        </div>

        </>
    );
}

export default Testimonials