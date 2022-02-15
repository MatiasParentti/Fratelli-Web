import React from "react";
import { Link } from 'react-router-dom';



const Futer = () => {


    const path = window.location.pathname

    return (


        <div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#00802d" fillOpacity="1" d="M0,192L60,208C120,224,240,256,360,234.7C480,213,600,139,720,144C840,149,960,235,1080,245.3C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
            <footer className="footer section" id="footer">
                <div className="footer__container container grid">
                    <div className="footer__content grid">
                        <div className="footer__data">
                            <h3 className="footer__title">Fratelli</h3>
                            <p className="footer__description">Experiencia En El
                                Manejo Integado De Plagas
                            </p>
                            <div>
                                <a href="https://www.facebook.com/Fratelli-control-de-plagas-102623304906378/" rel="noreferrer" target="_blank" className="footer__social">
                                    <i className="ri-facebook-box-fill"></i>
                                </a>
                                <a href="mailto:fratellicontroldeplagas@gmail.com" target="_blank" rel="noreferrer" className="footer__social">
                                    <i className="ri-mail-fill"></i>
                                </a>
                                <a href="https://www.instagram.com/fratellicontroldeplagas" rel="noreferrer" target="_blank" className="footer__social">
                                    <i className="ri-instagram-fill"></i>
                                </a>
                            </div>
                            <p className="footer__description"><i className="bi bi-phone-fill footer__social"></i><i>15-37872322</i>
                            </p>
                        </div>

                        <div className="footer__data">
                            <h3 className="footer__subtitle">About</h3>
                            <ul>
                                <li className="footer__item">
                                    {path !== '/' ? (<Link to='/'><a className="footer__link">Nosotros</a></Link>) : (<a href="#about" className="footer__link">Nosotros</a>)}
                                </li>
                                <li className="footer__item">
                                    <Link to='/Servicios'> <a className="footer__link">Servicos</a></Link>

                                </li>
                                <li className="footer__item">
                                    {path !== '/' ? (<Link to='/'><a className="footer__link">Preguntas Frecuentes</a></Link>) : (<a href="#faq" className="footer__link">Preguntas Frecuentes</a>)}

                                </li>
                            </ul>
                        </div>


                    </div>

                    <div className="footer__rights">
                        <p className="footer__copy">&#169; 2020 Fratelli Control de Plagas.</p>
                        <div className="footer__terms">
                            <a  className="footer__terms-link"></a>
                            <a href="#" className="footer__terms-link"></a>
                        </div>
                    </div>
                </div>
              
            </footer>
      

        </div>





    )



}
export default Futer;