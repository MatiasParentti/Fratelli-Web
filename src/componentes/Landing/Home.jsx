import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';


const Home = () => {

    const path = window.location.pathname

    const sr = ScrollReveal({
        distance: '30px',
        duration: 2800,
        reset: false
    })

    useEffect(() => {

        sr.reveal('.home__data', {origin: 'top' ,interval: 100, delay: 400});
        sr.reveal('.home__social-link', { origin: 'top',interval: 100, delay: 200 });
        sr.reveal('.home__info', {origin: 'top' ,interval: 100, delay: 400 });
     
    }, [])


    return (


        <section className="home" id="home">

            <img src="/img/homei.jpg" alt="back" className="home__img" />

            <div className="home__container container grid">
                <div className="home__data">
                    <span className="home__data-subtitle">Manejo integral</span>
                    <h1 className="home__data-title">FRATELLI<br></br> Control de <b>plagas <br></br></b></h1>
                    {path !== '/' ? (<Link to='/'><a className="button">Saber mas</a></Link>) : (<a href="#about" className="button btn__color">Saber mas</a>)}


                </div>

                <div className="home__social">
                    <a href="https://www.facebook.com/Fratelli-control-de-plagas-102623304906378/" rel="noreferrer" target="_blank" className="home__social-link">
                        <i className="ri-facebook-box-fill"></i>
                    </a>
                    <a href="https://www.instagram.com/fratellicontroldeplagas/?r=nametag" rel="noreferrer" target="_blank" className="home__social-link">
                        <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="mailto:fratellicontroldeplagas@gmail.com" target="_blank" rel="noreferrer" className="home__social-link">
                        <i className="ri-mail-fill"></i>
                    </a>
                </div>

                <div className="home__info">
                    <div>
                        <span className="home__info-title">Asesoriamiento gratis</span>
                        <a target='_blank' rel="noreferrer" href="https://api.whatsapp.com/send?phone=+5491137872322&text=Hola!%20quisiera%20hacer%20una%20consulta" className=" button--flex  home__info-button btn__color">
                            Mas<i className="ri-arrow-right-line"></i>
                        </a>
                    </div>

                    <div className="home__info-overlay">
                        <img src="/img/6.jpeg" alt="" className="home__info-img" />
                    </div>
                </div>
            </div>
        </section>

    )



}
export default Home;