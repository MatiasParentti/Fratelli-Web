import React from "react";


const Nosotros = () => {



   return (


        <React.Fragment>

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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#00802d" fillOpacity="1" d="M0,192L60,208C120,224,240,256,360,234.7C480,213,600,139,720,144C840,149,960,235,1080,245.3C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
            </section>
           
        </React.Fragment>





    )



}
export default Nosotros;