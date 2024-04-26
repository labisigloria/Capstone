import styles from './admin.module.css'



function admin() {

    return (

        <div className={styles.history}>
            <div className={styles.payment}>
                <img src="./images/Group 1.png" className="logo"/> <span>PAYMENT HISTORY</span>
                <input type='name' placeholder='<img src="./images/search-ig.png" /> Search' />
                <p> <img src='./images/home-line.png' /> Dashboard</p>
                <p> <img src='./images/bar-chart-square-02.png' /> Payment management</p>
                <p> <img src='./images/layers-three-01.png' /> Fee management</p>
                <p> <img src='./images/users-01.png' /> All students</p>
                <p> <img src='./images/check-done-01.png' /> Reporting and analytics</p>
                <p> <img src='./images/pie-chart-03.png' /> Communication</p>
                <p> <img src='./images/life-buoy-01.png' /> Support</p>
                <p> <img src='./images/icon 1.png' /> Settings</p>
                <hr />
                <div className={styles.jonah}>
                    <img src='Display' />
                    <div className='admin'>
                        <h3>Admin</h3>
                        <p>jonathan@gmail.com</p>
                    </div>
                    <img src='./images/log-out-01.png' />
                </div>
            </div>
            <div className='report'>
                <span><img src='check-done-01.png' /> <img src='chevron-right.png' /> <p>Reporting and Analytics</p></span>
                <div className={styles.anal}>
                    <div>
                        <h4>Reporting and Analytics</h4>
                        <p>Comprehensive report of all financial trends</p>
                    </div>
                    <div>
                        <img src='./images/Frame.png' />
                        <img src='./images/Display.png' />
                    </div>
                </div>
                <div className={styles.fees}>
                    <div>
                        <p>Total Fees Collected</p>
                        <em>$1,567.99</em>
                        <p>120 Payments</p>
                    </div>
                    <div>
                        <p>Total Exam Fees </p>
                        <em>$2,868.99</em>
                        <p>130 Payments</p>
                    </div>
                    <div>
                        <p>Total Extra Curricular</p>
                        <em>156k</em>
                        <p>100 Payments</p>
                    </div>
                    <div>
                        <p>No. Of Payments</p>
                        <em>360</em>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default admin