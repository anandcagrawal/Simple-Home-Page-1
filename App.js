import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home"
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "./Login";
import Cart from "./Cart"


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" conponent={Cart} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;