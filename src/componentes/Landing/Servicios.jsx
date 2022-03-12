import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';


const Servicios = () => {

    const sr = ScrollReveal({
        distance: '60px',
        duration: 2800,
        reset: false
    })

    useEffect(() => {
        sr.reveal('.discover__card', { origin: 'left', interval: 100, delay: 400 });
    }, [])




    return (

        <React.Fragment>

            <section className="discover section" id="discover">

                <h2 className="section__title">Servicios</h2>


                <div className="place__container container grid">

                    <div className="discover__card ">
                        <img src="/img/gggg.jpg" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Desinsectacion</h2>
                            <span className="discover__description">Control de cucarachas,hormigas, pulgas y mas</span>
                            <Link to='/Presupuestos'><a className="button discover__button">Pedir Presupuesto</a></Link>


                        </div>
                    </div>


                    <div className="discover__card">
                        <img src="/img/gggg.jpg" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Desratizacion</h2>
                            <span className="discover__description">Control y monitoreo de roedores</span>
                            <Link to='/Presupuestos'>   <a className="button discover__button">Pedir Presupuesto</a></Link>
                        </div>
                    </div>


                    <div className="discover__card">
                        <img src="/img/gggg.jpg" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Limpieza de <br></br> tanques</h2>
                            <span className="discover__description">Analisis fisicoquimico y bacteriologico</span>
                            <Link to='/Presupuestos'><a className="button discover__button">Pedir Presupuesto</a></Link>
                        </div>
                    </div>
                </div>

            </section>


        </React.Fragment>
    )



}
export default Servicios;