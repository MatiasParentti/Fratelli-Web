import React from "react";
import './css/swiper-bundle.min.css';
import Headerx from "./Landing/Headerx";
import Videosecsion from "./Landing/Videosecsion";
import Preguntas from "./Landing/Preguntas";
import Futer from "./Landing/Futer";
import Sponsor from "./Landing/Sponsor"
import Servicios from "./Landing/Servicios";
import Nosotros from "./Landing/Nosotros";
import Home from "./Landing/Home"
import Navmenu from "./Landing/Navmenu";
import './css/style.css';
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

const Inicio = () => {


    const sr = ScrollReveal({
        distance: '60px',
        duration: 2800,
        reset: false
      })
  
      useEffect(() => {
      sr.reveal(`.home__data, .home__social-link, .home__info
          `, {
        origin: 'top',
        interval: 100,
      })
  /*==================== REMOVE MENU MOBILE ====================
      sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`, {
        origin: 'left',
      })
  
      sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form, .accordion`, {
        origin: 'right',
        interval: 100,
      })
      */
    }, [])

    

    return (


        <React.Fragment>


            <Navmenu></Navmenu>


            <Home></Home>

            <Nosotros></Nosotros>

            <Servicios></Servicios>

            <Headerx></Headerx>

            <Videosecsion ></Videosecsion >

            <Preguntas></Preguntas>

            <Sponsor></Sponsor>


            <Futer></Futer>

        </React.Fragment>
    )
}

export default Inicio;