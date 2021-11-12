import React from "react";
import { Link } from "react-router-dom";

const Servicios = () => {


    return (

        <section className="discover section" id="discover">
            <h2 className="section__title">Servicios</h2>


            <div className="place__container container grid">

                <div className="discover__card ">
                    <img src="/img/gggg.jpg" alt="" className="discover__img" />
                    <div className="discover__data">
                        <h2 className="discover__title">Desinsectacion</h2>
                        <span className="discover__description">Control de cucarachas,hormigas, pulgas y mas</span>
                        <Link to='/Servicios'><a className="button discover__button">Ver Mas</a></Link>
                        <a href="https://forms.gle/E8aNVVJEFX2PEK76A" rel="noreferrer" target='_blank' className='consultas'>Consultas</a>

                    </div>
                </div>


                <div className="discover__card ">
                    <img src="/img/gggg.jpg" alt="" className="discover__img" />
                    <div className="discover__data">
                        <h2 className="discover__title">Desratizacion</h2>
                        <span className="discover__description">Control y monitoreo de roedores</span>
                        <Link to='/Servicios'>   <a className="button discover__button">Ver Mas</a></Link>
                        <a href="https://forms.gle/EtvzEbGJ5Tg9UZuFA" rel="noreferrer" target='_blank' className='consultas'>Consultas</a>
                    </div>
                </div>


                <div className="discover__card">
                    <img src="/img/gggg.jpg" alt="" className="discover__img" />
                    <div className="discover__data">
                        <h2 className="discover__title">Limpieza de <br></br> tanques</h2>
                        <span className="discover__description">Analisis fisicoquimico y bacteriologico</span>
                        <Link to='/Servicios'><a className="button discover__button">Ver Mas</a></Link>
                        <a href="https://forms.gle/f3bWWvmq67oqZ5ed8" rel="noreferrer" target='_blank' className='consultas'>Consultas</a>

                    </div>
                </div>
            </div>

        </section>


    )



}
export default Servicios;