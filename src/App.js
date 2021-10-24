import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Tips from "./components/Tips/Tips";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute path="/tips">
              <Tips></Tips>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
