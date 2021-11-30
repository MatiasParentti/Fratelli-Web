import React from "react";
import Grid from "@material-ui/core/Grid";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { firebaseCrear } from '../../firebaseConfig';
import ModalForm from "./ModalForm";

const PresupuestoGastronomicos = () => {

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email es requerido')
      .email('Email es invalido')
    ,
    name: Yup.string()
      .required('Nombre es requerido')
    ,
    localidad: Yup.string()
      .required('Localidad es requerido')
    ,
    tipo: Yup.string()
      .required('Campo requerido')
    ,
    servicio: Yup.string()
      .required('Campo requerido')
    ,
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data, e) => {
    e.preventDefault();
    firebaseCrear('PresupuestoGastronomicos', data)
    reset()
    return false;
  }

  return (
    <React.Fragment>
      <section className="subscribe" id="subscribe">
        <div className="">
          <div className="form__container container">
            <form onSubmit={handleSubmit(onSubmit)} className="subscribe__form__presu">
              <Grid container spacing={3}>
                <Grid align="center" item xs={12} sm={6} md={4} lg={4}>
                  <input
                    placeholder="Nombre"
                    className="subscribe__input__presu"
                    name="name"
                    type="text"
                    {...register('name')}
                  />
                  <span className="error">{errors.name?.message}</span>
                </Grid>
                <Grid align="center" item xs={12} sm={6} md={4} lg={4}>
                  <input
                    placeholder="Telefono"
                    className="subscribe__input__presu"
                    name="tel"
                    type="text"
                    {...register('tel')}
                  />
                </Grid>
                <Grid align="center" item xs={12} sm={6} md={4} lg={4}>
                  <select className="form-select select_presu" aria-label="Default select example" defaultValue={'DEFAULT'} {...register('tipo')}>
                    <option value="DEFAULT" disabled selected>Tipo de lugar</option>
                    <option value="Restaurante">Restaurante</option>
                    <option value="Panaderia">Panaderia</option>
                    <option value="Supermercado">Supermercado</option>
                    <option value="Comercio">Comercio</option>
                    <option value="Otro">Otro</option>
                  </select>
                </Grid>
                <Grid align="center" item xs={12} sm={6} md={4} lg={4}>
                  <input
                    placeholder="Email"
                    className="subscribe__input__presu"
                    name="email"
                    type="text"
                    {...register('email')}
                  />
                  <span className="error">{errors.email?.message}</span>
                </Grid>
                <Grid align="center" item xs={12} sm={6} md={4} lg={4}>
                  <input
                    placeholder="Localidad"
                    className="subscribe__input__presu"
                    name="localidad"
                    type="text"
                    {...register('localidad')}
                  />
                  <span className="error">{errors.localidad?.message}</span>
                </Grid>
                <Grid align="center" item xs={12} sm={6} md={4} lg={4}>
                  <select className="form-select select_presu" aria-label="Default select example" defaultValue={'DEFAULT'}{...register('servicio')}>
                    <option value="DEFAULT" disabled selected>Servicio </option>
                    <option value="Fumigacion">Fumigacion</option>
                    <option value="Desratizacion">Desratizacion</option>
                    <option value="Limpeza de tanque">Limpeza de tanque</option>
                    <option value="Sanitizacion">Sanitizacion</option>
                  </select>
                </Grid>
                <Grid align="center" item xs={12}>
                  <textarea
                    placeholder="Consulta"
                    className="subscribe__textarea"
                    name="consulta "
                    type="text"
                    {...register('consulta')}
                  ></textarea>
                </Grid>
                <Grid align="center" item xs={12}>
                  {errors.name || errors.email || errors.localidad || errors.tipo ? (<button className="button" type='submit' >Presupuestar</button>) : (<ModalForm />)}

                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PresupuestoGastronomicos;
