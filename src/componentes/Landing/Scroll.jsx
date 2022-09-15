import React from "react";
import { useState } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Scroll = () => {

    const [scroll, setScroll] = useState('scrollup')


  /*  function scrollUp() {
        if (this.scrollY >= 200) {
            setScroll('scrollup show-scroll')
        } else {
            setScroll('scrollup')
        }
    }
    window.addEventListener('scroll', scrollUp)*/


    return (

        <React.Fragment>

            <a target='_blank' rel="noreferrer" href="https://api.whatsapp.com/send?phone=+5491137872322&text=Hola!%20quisiera%20hacer%20una%20consulta" className={scroll} id="scroll-up">
               <div className="my-float">
               <WhatsAppIcon></WhatsAppIcon>
               </div>
            </a>

        </React.Fragment>
    )





}


export default Scroll;