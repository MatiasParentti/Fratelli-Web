import React from "react";
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';


const Headerx = () => {

    const sr = ScrollReveal({
        distance: '60px',
        duration: 2800,
        reset: false
    })

    useEffect(() => {
        sr.reveal(`.section__title, .experience__overlay`, {origin: 'left' ,interval: 100, delay: 400});
        sr.reveal('.experience__data', {origin: 'right' ,interval: 100, delay: 400});
    }, [])

return (


    <div>

        <section className="experience section">
            <h2 className="section__title">Experiencia en el<br></br>Manejo Integado de Plagas</h2>

            <div className="experience__container container grid">
                <div className="experience__content grid">
                    <div className="experience__data">
                        <h2 className="experience__number">+10</h2>
                        <span className="experience__description">Años de<br></br> Experiencia</span>
                    </div>

                    <div className="experience__data">
                        <h2 className="experience__number">7500</h2>
                        <span className="experience__description">Servicios<br></br>realizados</span>
                    </div>

                    <div className="experience__data">
                        <h2 className="experience__number">+200</h2>
                        <span className="experience__description">Clientes<br></br>trabajados</span>
                    </div>
                </div>

                <div className="experience__img grid">
                    <div className="experience__overlay">
                        <img src="/img/3.jpeg" alt="" className="experience__img-one" />
                    </div>

                    <div className="experience__overlay">
                        <img src="/img/2.jpeg" alt="" className="experience__img-two" />
                    </div>
                </div>
            </div>
        </section>


    </div>





    )



}
export default Headerx;