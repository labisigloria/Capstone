import styles from './Teachers.module.css'

function Teachers() {
     return(
        <><h6 className={styles.h6} >Our Teachers</h6>
        <h4 className={styles.h4}>Meet our trained Teachers</h4>
        <div className={styles.teachersImages}>
             <img src='./images/Rectangle 7.png' />
             <img src='./images/Rectangle 8.png'  />
             <img src='./images/Rectangle 9.png' />
             <img src='./images/Rectangle 10.png' />
         </div></>
     );
}

export default Teachers