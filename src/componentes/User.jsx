import React from "react";
import Futer from "./Landing/Futer";
import Home2 from "./Landing/Home2";
import Navmenu from "./Landing/Navmenu";
import ChekoutPage from "./Shop/ChekoutPage";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const User = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navmenu></Navmenu>
      <Home2></Home2>
      <br />
      <br />
      <br />
      <div className="container">
        <Alert className={classes.root} severity="info">
          <AlertTitle>Info</AlertTitle>
          Servicios de compra directa solo para —{" "}
          <strong>Ciudad Autonoma de Bs As</strong>
          <br />
          Los montos corresponden a servicios para <strong>Particulares</strong>
          <br />
        </Alert>
        <br />
        <Alert severity="success">
          Mas info{" "}
          <Link to="/Presupuestos">
            <button className="button">Pedir Presupuesto</button>
          </Link>
        </Alert>
        <br />
      </div>
      <br />
      <br />
      <ChekoutPage></ChekoutPage>
      
      <Futer></Futer>
    </React.Fragment>
  );
};

export default User;
