import { Route } from "react-router";
import { Redirect } from "react-router";


export default function AuthenticatedRoute({ component: C, appProps, ...rest }) {

 
  return (
    <Route
      {...rest}
      render={props =>
        appProps.isAuthenticated
          ? <C {...props} {...appProps} />
          : <Redirect
            to={`/Servicios`}
          />}
    />
  );
}