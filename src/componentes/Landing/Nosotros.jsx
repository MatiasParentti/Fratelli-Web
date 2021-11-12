import React from "react";

const Nosotros = () => {

    return (


        <div>


            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__data">
                        <h2 className="section__title about__title">Sobre<br></br>Nosotros</h2>
                        <p className="about__description">Somos una empresa familiar con mas de 10 años de experiencia,nos
                            capacitamos permanentemente para brindar un servicio profesional.Brindamos soluciones
                            integrales a plagas urbanas
                        </p>
                        <a href="#discover" className="button">Servicios</a>
                    </div>

                    <div className="about__img">
                        <div className="about__img-overlay">
                            <img src="/img/cabecera1.jpg" alt="" className="about__img-one" />
                        </div>

                        <div className="about__img-overlay">
                            <img src="/img/tres.jpeg" alt="" className="about__img-two" />
                        </div>
                    </div>
                </div>
            </section>


        </div>





    )



}
export default Nosotros;