import React from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { firebaseCrear } from '../../firebaseConfig';
import { useState } from "react";



const Sponsor = () => {



    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email es requerido')
            .email('Email es invalido'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const [correo, setCorreo] = useState(<input placeholder='Email' className="subscribe__input" name="email" type="text" {...register('email')} />)

    function onSubmit(data) {
        firebaseCrear('newsletter', data)
        reset()
        setCorreo('Gracias por Suscribirse')
        return false;
    }



    return (


        <div>

            <section className="subscribe section" id="subscribe">
                <div className="subscribe__bg">
                    <div className="subscribe__container container">
                        <h2 className="section__title subscribe__title">Suscribite<br></br>a nuestros contactos</h2>
                        <p className="subscribe__description">Recibi promociones y las ultimas novedades de nuestros servicios
                        </p>


                        <form className="subscribe__form" onSubmit={handleSubmit(onSubmit)} >

                            {correo}
                            <button className="button" type='submit' >Suscribirse</button>

                        </form>
                        <span className="error1">{errors.email?.message}</span>

                    </div>
                </div>
            </section>


            <section className="sponsor section">
                <div className="sponsor__container container grid">
                    <div className="sponsor__content">
                        <a href="https://ucaba.org.ar/" target="_blank" rel="noreferrer" >
                            <img src="/img/ucaba.png" alt="" className="sponsor__img" /></a>
                    </div>
                    {/*   <div className="sponsor__content">
                    <a href="https://www.casadeinsecticidas.com.ar/" target="_blank" rel="noreferrer"  >
                        <img src="https://www.casadeinsecticidas.com.ar/imagenes/logo.webp" alt="" className="sponsor__img" /></a>
                    </div> */}
                    <div className="sponsor__content">

                        <img src="/img/logo1.png" alt="" className="sponsor__img" />
                    </div>

                </div>
       
            </section>


        </div>





    )



}
export default Sponsor;