import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from "./componentes/inicio";
import { firebaseConfig } from "./firebaseConfig";
import User from "./componentes/User";
import Servicioss from "./componentes/Servicioss";
import Pay from './componentes/Pay';
import Scroll from "./componentes/Landing/Scroll";
import Presupuestos from "./componentes/Presupuestos";
import { useStateValue } from './componentes/Shop/StateProvider'
import { useState, useEffect } from "react";
import AuthenticatedRoute from './AuthenticatedRoute';




firebaseConfig();

function App() {

  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [{ basket }, dispatch] = useStateValue();



  useEffect(() => {

    if (basket.length > 0) {
      userHasAuthenticated(true);
    }

  }, [basket]);



  return (

    <React.Fragment>

      <Router>

        <Switch>

          <Route exact path='/' component={Inicio}>

          </Route>

          <Route exact path='/Cart' component={User}>

          </Route>
          <Route exact path='/Servicios' component={Servicioss}>

          </Route>
          <Route exact path='/Presupuestos' component={Presupuestos}>

          </Route>

          <AuthenticatedRoute
            path='/Checkout'
            component={Pay}
            appProps={{ isAuthenticated }}
          />

        </Switch>

      </Router>


      <Scroll></Scroll>

    </React.Fragment>

  );
}

export default App;
