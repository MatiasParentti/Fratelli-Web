import React from "react";
import Futer from "./Landing/Futer";
import Home2 from "./Landing/Home2";
import Navmenu from "./Landing/Navmenu";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import { useState } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import PresupuestoConsorcios from './Presupuestos/PresupuestoConsorcios';
import PresupuestoHogares from './Presupuestos/PresupuestoHogares';
import PresupuestoHoteles from './Presupuestos/PresupuestoHoteles';
import PresupuestoGastronomicos from './Presupuestos/PresupuestoGastronomicos';
import PresupuestoEmpresas from './Presupuestos/PresupuestoEmpresas';
import PresupuestoCentrosEdu from './Presupuestos/PresupuestoCentrosEdu';
import ScrollReveal from 'scrollreveal';
import { Icon } from '@iconify/react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  buttons: {
    borderBottom: "2px solid green",
    width: "100%",
    fontSize: "1.25rem",
    backgroundColor: "whitesmoke",
  },
}));

const Presupuestos = (props) => {
  const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
  })



  const classes = useStyles();
  const [presu, setPresu] = useState(" ");
  ;
  const changePresupuesto = (e) => {
    setPresu(e.target.id);
    sr.reveal(`.hola`, {
      origin: 'top',
      interval: 100,
    })
  };

  function LayoutContendio(props) {
    switch (props.contenido) {
      case "Empresas": return <PresupuestoEmpresas></PresupuestoEmpresas>; break;
      case "Gastronómicos": return <PresupuestoGastronomicos></PresupuestoGastronomicos>; break;
      case "Consorcios": return <PresupuestoConsorcios></PresupuestoConsorcios>; break;
      case "Centros educativos": return <PresupuestoCentrosEdu></PresupuestoCentrosEdu>; break;
      case "Hoteles": return <PresupuestoHoteles></PresupuestoHoteles>; break;
      case "Hogares": return <PresupuestoHogares></PresupuestoHogares>; break;
      default: return < span></span>; break;
    }
  }

  function Icons(props) {
    switch (props.contenido) {
      case "Empresas": return <Icon icon="bx:bxs-factory" className="icon__presu" />; break;
      case "Gastronómicos": return <Icon icon="bx:bxs-store" className="icon__presu" />; break;
      case "Consorcios": return <Icon icon="bx:bxs-building-house" className="icon__presu" />; break;
      case "Centros educativos": return <Icon icon="bx:bxs-institution" className="icon__presu" />; break;
      case "Hoteles": return <Icon icon="bx:bxs-school" className="icon__presu" />; break;
      case "Hogares": return <Icon icon="bx:bx-home" className="icon__presu" />; break;
      default: return < span></span>; break;
    }
  }




  return (
    <React.Fragment>
      <Navmenu></Navmenu>
      <Home2></Home2>

      <div className="container">
        <Alert className={classes.root} severity="success">
          <AlertTitle>Bienvenido</AlertTitle>
          Pida su presupuesto personalizado nos contactaremos a la brevedad
          <strong></strong>
        </Alert>
        <br />
        <br />
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography align="center" gutterBottom>
                <h2 className="section__title"> Presupuestos </h2>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" gutterBottom>
                Seleccione el tipo de Presupuesto
              </Typography>
            </Grid>
            <Grid
              align="center" item xs={12} sm={6} md={4} lg={4}>
              <Button

                className={classes.buttons}>
                <Typography
                  id="Empresas"
                  onClick={changePresupuesto}
                  align="center"
                >
                  Empresas
                </Typography>
              </Button>
            </Grid>
            <Grid align="center" item xs={12} sm={6} md={4} lg={4}>
              <Button className={classes.buttons}>
                {" "}
                <Typography
                  id="Gastronómicos"
                  onClick={changePresupuesto}
                  align="center"
                >
                  Gastronómicos
                </Typography>
              </Button>
            </Grid>
            <Grid align="center" item xs={12} sm={6} md={4} lg={4}>
              <Button className={classes.buttons}>
                {" "}
                <Typography
                  id="Consorcios"
                  onClick={changePresupuesto}
                  align="center"
                >
                  Consorcios
                </Typography>
              </Button>
            </Grid>
            <Grid align="center" item xs={12} sm={6} md={4} lg={4}>
              <Button className={classes.buttons}>
                {" "}
                <Typography
                  id="Centros educativos"
                  onClick={changePresupuesto}
                  align="center"
                >
                  Centros educativos
                </Typography>
              </Button>
            </Grid>
            <Grid align="center" item xs={12} sm={6} md={4} lg={4}>
              <Button className={classes.buttons}>
                {" "}
                <Typography
                  id="Hoteles"
                  onClick={changePresupuesto}
                  align="center"
                >
                  Hoteles
                </Typography>
              </Button>
            </Grid>
            <Grid align="center" item xs={12} sm={6} md={4} lg={4}>
              <Button className={classes.buttons}>


                <Typography
                  id="Hogares"
                  onClick={changePresupuesto}
                  align="center"

                >

                  Hogares
                </Typography>
              </Button>
            </Grid>

            <Grid align="center" item xs={12}>
              <br />
              <br />

              <Icons contenido={presu} />
              <Typography align="center" gutterBottom>

                <h2 className="section__title">{presu}</h2>
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className="hola" >
          <LayoutContendio contenido={presu} />
        </div>
      </div>
      <Futer></Futer>
    </React.Fragment>
  );

};

export default Presupuestos;
