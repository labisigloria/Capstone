import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Welcome from './components/Welcome.jsx';
import Approach from './components/Approach.jsx';
import Mission from './components/Mission.jsx';
import Teachers from './components/Teachers.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';



const App = () => {
  return(
    <Router>   
        <Header />
        <Routes> 
      <Route path='/' element={<Home /> } />
        <Route path='/Login' element={<Login />} />
   
      </Routes>
       
    </Router>

  );
      
};

const Home = () => {
  return(
    <div>
      <Welcome />
      <Approach />
      <Mission />
      <Teachers />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  )
}


export default App;
