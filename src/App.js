import React from "react";
import Navbar from "./Navbar";
import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import Addorderpage from "./Addorderpage";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Order from "./Order";
import Register from "./Register";
import CustomerPage from "./CustomerPage";
import Addorder from "./Addorder";
import Admin from "./Admin";
import WasherPage from "./WasherPage";
import WasherLogin from "./WasherLogin";
import Allwasher from "./Allwasher";
import AdminLogin from "./AdminLogin";
import WasherRegister from "./WasherRegister";

function App() {
  
  return (
    < Router>
   
     <Switch>
      
      <Route exact path="/"  >
        <Navbar></Navbar>
        <Header></Header>
        <Footer></Footer>
      </Route>
      <Route exact path="/order" component={Order}/>
      <Route exact path="/addorder" component={Addorderpage}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/Register" component={Register}/>
      <Route exact path="/CustomerPage" component={CustomerPage}/>
      <Route exact path="/WasherPage" component={WasherPage}/>
      <Route exact path="/WasherLogin" component={WasherLogin}/>
      <Route exact path="/Add" component={Addorder}/>
      <Route exact path="/Admin" component={Admin}/>
      <Route exact path="/Allwasher" component={Allwasher}/>
      <Route exact path="/AdminLogin" component={AdminLogin}/>
      <Route exact path="/WasherRegister" component={WasherRegister}/>
      
     </Switch>
      
    </Router>
   
   
  );
}

export default App;
