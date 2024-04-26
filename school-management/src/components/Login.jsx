
import styles from './Login.module.css'

function Login(){
    

    return(
        <div className={styles.Login}>
            <div className={styles.loginImg}>
                
            <img src='./images/Frame 1618868276.png' alt="logo" className={styles.logo} />
            </div>
            <form>
            <div className={styles.loginForm}>
                <h4 className={styles.h4}>Log In</h4>
                <p className={styles.p}>Enter your credentials to access your account</p>
                
                    <label className={styles.label}>EMAIL ADDRESS</label><br />
                    <input type="text" name="email" placeholder="Email" required="required" className={styles.input}/> <br />
                    <label className={styles.label}>PASSWORD</label><br />
                    <input type="password" name="password" required="required" placeholder="Enter Password" className={styles.input} /><br />
                    <input type="checkbox"  value="Remember me for 30 days"  /><span className={styles.span}>Remember me for 30 days?</span>
                    <span> <a href='#' className={styles.forgot}>Forgot Password?</a></span>
                    <button className={styles.button}>Log In</button>
                    <p className={styles.create}> Are you new here? <a href="#" className={styles.account}>Create Account</a></p>
               
            </div>
             </form>
        </div>
    );
}

export default Login