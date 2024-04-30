import styles from './Admission.module.css'

function Admission() {

    return ( 
        <div classname={body}>

        <div>
            <h3 classname={h3} >Admissions</h3>
             <h2>Enrollment Details</h2>
            <br />
            <br />
        </div>
        <div classname="row">
               <div classname="column"> 
                <h1 classname="h1">
                Welcome to St. Florence Private School
                </h1>
                <br />
                <br />
            <p classname="big">We are dedicated to providing a nurturing 
                and enriching educational experience for 
                every student.Our admissions process is designed to help 
                you explore our diverse range of classes and programs tailored to meet
                the needs and interest of each child. whether you're looking for a 
                supportive environment for your child's early years or seeking a challenging
                academic program for your teen. we invite you to discover the possibilities at St. Florencec
                Private School. Schedule a visit today andtake the first step towards joining our vibrant community
                of learners.
            </p>
            </div>
            <div classname="column">
                <img src="./images/Books.webp" alt="" />
                
            </div>

        </div>
        <hr classname="first" />
        <br /><br /><br />
        <div classname="heading">
            
                <h3 classname="h3">Class Offerings</h3>
                <h2>Available Classes and details</h2>

            </div>
            <br />
            <br />
            <div classname="row1">
                <div classname="column1">
                    <img src="./images/Class offering 1.jpg" alt="" />
                    <p>Creche <br />view details</p>
                </div>
                <div classname="column1">
                    <img src="./images/Class offering 2.jpg" alt="" />
                    <p>KG1 <br />view details</p>
                </div>
                <div classname="column1">
                    <img src="./images/Class offering 3.jpg" alt="" />
                    <p>KG2 <br />view details</p>
                </div>
           <div classname="column1">
            <img src="./images/istockphoto-1475870230-612x612.jpg" alt="" />
            <p>KG3 <br />view details</p>
           </div>
           <div classname="column1">
            <img src="./images/istockphoto-967807726-612x612.jpg" alt="" />
            <p>KG4 <br />view details</p>
           </div>
           <div classname="column1">
            <img src="./images/Class offering 4.jpg" alt="" />
            <p>Basic 1 <br />view details</p>
           </div>
          
           </div>
           <br /><br /><br />
           <hr classname="second" />
           <br />
           <br />
           
 <div classname="row2">
<div classname="column2">

        <h2>Join Our Newsletter</h2>
        <p>Get all the latest St. Florence Private School news delivered to your inbox.</p>
    
    </div>
    
     <div classname="column2">
        <br /><br /><br />
        <input type="text" placeholder="Email address" />
        <a href=""><button class="btn">Subscribe</button></a>
    </div>
       
</div>
<footer>
    <div classname="container">
        <a href="">About Us</a>
        <a href="">Facebook</a>
        <a href="">Contact Us</a>
        <a href="">Twitter</a>
        <a href="">Privacy Policy</a>
        <a href="">YouTube</a>
        <a href="">Term of Use</a>
    
</div>
</footer>
</div>
    

    )
}

export default  Admission