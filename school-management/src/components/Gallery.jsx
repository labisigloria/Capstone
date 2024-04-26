import styles from './Gallery.module.css'

 

 function Gallery() {
    return(
        <>
        <h6 className={styles.h6}>Photo Gallery</h6>
        <h4 className={styles.h4}>Comfortable and Conducive Learning <br/> Environment</h4>
        <div className={styles.photos}>
        
        <div className={styles.item1}> <img src='./images/Frame 47.png' /> </div> 
        <div className={styles.item2} > <img src='./images/Frame 49.png' /></div>  
        <div className={styles.item3} >  <img src='/images/Frame 51.png' /></div> 
        <div className= {styles.item4}> <img src='/images/Frame 48.png'/></div>  
        <div className={styles.item5}> <img src='./images/Frame 50.png' /></div>  
            
        </div>
        </>
    );
 }

 export default Gallery