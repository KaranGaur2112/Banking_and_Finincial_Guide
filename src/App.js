import './App.css';
import Navbar from './MyComponents/Navbar';
import Body from './MyComponents/Body';
import Consultancy from './MyComponents/Consultancy';
import TaxCalculator from './MyComponents/TaxCalculator';
import AboutUs from './MyComponents/AboutUs';
import Footer from './MyComponents/Footer';
import Sign from './MyComponents/Sign';
import {

  Route,
  Switch
} from "react-router-dom";
import Calculator from './MyComponents/Calculator';

function App() {


   return (
     <>
      
      <Navbar />
          <Switch>
          <Route exact path="/" component={Body} />
          <Route exact path="/consultancy" component={Consultancy} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/Calculator" component={Calculator} />
          <Route exact path="/TaxCalculator" component={TaxCalculator} />
          <Route exact path="/singup-login" component={Sign} />
          
          </Switch>
      <Footer />
    </>
  );
 
}

export default App;
