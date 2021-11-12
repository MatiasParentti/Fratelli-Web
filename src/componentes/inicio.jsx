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
import Scroll from "./Landing/Scroll";


const Inicio = () => {






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