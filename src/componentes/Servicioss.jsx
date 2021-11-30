import React from "react";
import Futer from "./Landing/Futer";
import Home2 from "./Landing/Home2";
import Products from "./Shop/Products";
import Navmenu from "./Landing/Navmenu";

import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from '@material-ui/lab';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Servicioss = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navmenu></Navmenu>
      <Home2></Home2>
      <div className='container'>
        <Alert className={classes.root} severity="info">
          <AlertTitle>Info</AlertTitle>
          Servicios de compra directa solo para  — <strong>Ciudad Autonoma de Bs As</strong><br/>
          Los montos corresponden a servicios para <strong>Particulares</strong><br/>
        </Alert>
        <br/>
        <Alert severity="success">Mas info  <Link to='/Presupuestos'><button style={{ justifySelf: 'end'}} className='button'>Pedir Presupuesto</button></Link></Alert>
        <br/>
        
      </div>
      <br />
      <br />

      <Products></Products>

      <Futer></Futer>
    </React.Fragment>
  );
};

export default Servicioss;
