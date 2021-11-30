import React from "react";
import { useState } from "react";


const Scroll = () => {

    const [scroll, setScroll] = useState('scrollup')


    function scrollUp() {
        if (this.scrollY >= 200) {
            setScroll('scrollup show-scroll')
        } else {
            setScroll('scrollup')
        }
    }
    window.addEventListener('scroll', scrollUp)


    return (

        <React.Fragment>

            <a href="#" className={scroll} id="scroll-up">
                <i className="ri-arrow-up-line scrollup__icon"></i>
            </a>

        </React.Fragment>
    )





}


export default Scroll;