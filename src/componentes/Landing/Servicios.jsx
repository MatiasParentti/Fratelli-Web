import React from "react";
import { Link } from "react-router-dom";



const Servicios = () => {




    return (

        <React.Fragment>

            <section className="discover section" id="discover">

                <h2 className="section__title">Servicios</h2>


                <div className="place__container container grid">



<a target='_blank' rel="noreferrer" href="https://api.whatsapp.com/send?phone=+5491137872322&text=Hola!,%20quisiera%20solicitar%20presupuesto%20para%20desinsectacion.">
                    <div className="discover__card ">
                        <img src="/img/gggg.jpg" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Desinsectacion</h2>
                            <span className="discover__description">Control de cucarachas,hormigas, pulgas y mas</span>
                            {/*          <Link to='/Presupuestos'><a className="button discover__button">Pedir Presupuesto</a></Link>
   <a target='_blank' rel="noreferrer" href="https://api.whatsapp.com/send?phone=+5491137872322&text=Hola!%20quisiera%20hacer%20una%20consulta" className="button discover__button">Pedir Presupuesto</a>*/}

                        </div>
                    </div>
                    </a>

                    <a target='_blank' rel="noreferrer" href="https://api.whatsapp.com/send?phone=+5491137872322&text=Hola!,%20quisiera%20solicitar%20presupuesto%20para%20desratizacion.">
                    <div className="discover__card">
                        <img src="/img/gggg.jpg" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Desratizacion</h2>
                            <span className="discover__description">Control y monitoreo de roedores</span>
                            {/*    <Link to='/Presupuestos'>   <a className="button discover__button">Pedir Presupuesto</a></Link>
                            <a target='_blank' rel="noreferrer" href="https://api.whatsapp.com/send?phone=+5491137872322&text=Hola!%20quisiera%20hacer%20una%20consulta" className="button discover__button">Pedir Presupuesto</a>*/}
                        </div>
                    </div>
                    </a>

<a target='_blank' rel="noreferrer" href="https://api.whatsapp.com/send?phone=+5491137872322&text=Hola!,%20quisiera%20solicitar%20presupuesto%20para%20limpieza%20de%20tanques.">
                    <div className="discover__card">
                        <img src="/img/gggg.jpg" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Limpieza de <br></br> tanques</h2>
                            <span className="discover__description">Analisis fisicoquimico y bacteriologico</span>
                            {/*   <Link to='/Presupuestos'><a className="button discover__button">Pedir Presupuesto</a></Link>
                            <a target='_blank' rel="noreferrer" href="https://api.whatsapp.com/send?phone=+5491137872322&text=Hola!%20quisiera%20hacer%20una%20consulta" className="button discover__button">Pedir Presupuesto</a>*/}
                        </div>
                    </div>
                    </a>

                </div>

            </section>


        </React.Fragment>
    )



}
export default Servicios;