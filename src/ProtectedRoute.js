// import React, { useContext } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { AuthContext } from './AuthContext';

// export const ProtectedRoute = (props) => {
//   const authValue = useContext(AuthContext)
//   console.debug('authValue', authValue)

//   // if (authValue.userDataPresent) {
//   // if (authValue.user) {
//     return (
//       <Route exact path={props.path}>
//         {props.component}
//       </Route>
//     );
//   // }
//   return (<Redirect to={props.redirectTo}></Redirect>);
//   // }
// }

import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export const ProtectedRoute = ({ component: RouteComponent, ...rest }) => {
  const { authenticated, loadingAuthState } = useContext(AuthContext);
  if (loadingAuthState) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={routeProps =>
        authenticated ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { prevPath: rest.path } }} />
        )
      }
    />
  );
}
