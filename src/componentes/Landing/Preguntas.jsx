import React from "react";
import { Icon } from '@iconify/react';
import { useEffect} from "react";

const Preguntas = () => {



    
    useEffect(() => {
        document.querySelectorAll('.accordion__container .accordion').forEach(accordion => {
            accordion.onclick = () => {
                accordion.classList.toggle('active');
            }
        });
    }, [])

    return (


        <div>
            <br />
            <br />
            <br />
            <section className="faq" id='faq'>

                <h2 className="section__title">Preguntas frecuentes</h2>
                <br />

                <div className="accordion__container">

                    <div className="accordion">
                        <div className="accordion__heading">
                            <h3>¿Entregan certificados del servicio?</h3>
                            <i ><Icon icon="bx:bx-chevron-down" /></i>

                        </div>
                        <p className="accordioin__content">
                            Contamos con habilitacion y entregamos obleas certificando los
                            servicios realizados.
                        </p>
                    </div>

                    <div className="accordion">
                        <div className="accordion__heading">
                            <h3>¿Me tengo que ir cuando fumigan?</h3>
                            <i ><Icon icon="bx:bx-chevron-down" /></i>
                        </div>
                        <p className="accordioin__content">
                            Usamos productos de ultima generacion, sin olor que permiten la presencia de personas cuando realizamos el servicio
                        </p>
                    </div>

                    <div className="accordion">
                        <div className="accordion__heading">
                            <h3>¿Que productos utilizan?</h3>
                            <i ><Icon icon="bx:bx-chevron-down" /></i>
                        </div>
                        <p className="accordioin__content">
                            Utilizamos productos aprobados por la ANMAT.Una gama variable de insecticidad floables, cebo en gel para el control de cucarachas y hormigas
                        </p>
                    </div>

                    <div className="accordion">
                        <div className="accordion__heading">
                            <h3>¿Que formas de pago aceptan?</h3>
                            <i ><Icon icon="bx:bx-chevron-down" /></i>
                        </div>
                        <p className="accordioin__content">
                            Aceptamos Mercado Pago, transferencias, efectivo.
                        </p>
                    </div>

                    <div className="accordion">
                        <div className="accordion__heading">
                            <h3>¿Realizan facturas?</h3>
                            <i ><Icon icon="bx:bx-chevron-down" /></i>
                        </div>
                        <p className="accordioin__content">
                            Luego del servicio se envia por correo electronico factura y certificado correspondiente
                        </p>
                    </div>

                    <div className="accordion">
                        <div className="accordion__heading">
                            <h3>¿Tienen garantia los servicios?</h3>
                            <i ><Icon icon="bx:bx-chevron-down" /></i>
                        </div>
                        <p className="accordioin__content">
                            Todos nuestros servicios cuentan con garantia de conformidad.
                        </p>
                    </div>

                </div>

            </section>

        </div>





    )



}
export default Preguntas;