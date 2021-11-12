import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from "./componentes/inicio";
import Registrar from "./componentes/Registrar"
import { firebaseConfig } from "./firebaseConfig";
import Login from "./componentes/Login";
import User from "./componentes/User";
import Servicioss from "./componentes/Servicioss";
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { actionType } from './componentes/Shop/reducer';
import { useStateValue } from './componentes/Shop/StateProvider'
import Pay from './componentes/Pay';
import Prueba from './componentes/Prueba';
import Futer from "./componentes/Landing/Futer";

import Scroll from "./componentes/Landing/Scroll";

//import ScrollReveal from 'scrollreveal';



firebaseConfig();

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        console.log(user.email)
        dispatch({
          type: actionType.SET_USER,
          user: user,
        })
      }
    })
  }, [])

  /*==================== SCROLL REVEAL ANIMATION ====================
  const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
  })


  sr.reveal(`.home__data, .home__social-link, .home__info,
         .discover__card,
         .experience__data, .experience__overlay,
         .place__card,
         .sponsor__content,
         .footer__data, .footer__rights`, {
    origin: 'top',
    interval: 100,
  })

  sr.reveal(`.about__data, 
         .video__description,
         .subscribe__description`, {
    origin: 'left',
  })

  sr.reveal(`.about__img-overlay, 
         .video__content,
         .subscribe__form`, {
    origin: 'right',
    interval: 100,
  })
*/
  /*==================== SHOW SCROLL UP ====================*/

  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

  return (

    <React.Fragment>


      <Router>
      
        <Switch>

          <Route exact path='/' component={Inicio}>

          </Route>
          <Route exact path='/Registrar' component={Registrar}>

          </Route>
          <Route exact path='/Login' component={Login}>

          </Route>
          <Route exact path='/User' component={User}>

          </Route>
          <Route exact path='/Servicios' component={Servicioss}>

          </Route>
          <Route exact path='/Checkout' component={Pay}>

          </Route>
          <Route exact path='/Prueba' component={Prueba}>

          </Route>

        </Switch>
        
      </Router>


      <Scroll></Scroll>

    </React.Fragment>

  );
}

export default App;
