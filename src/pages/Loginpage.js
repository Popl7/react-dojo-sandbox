import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
// import { User, auth } from "firebase";
import firebase from "../firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../AuthProvider";

export const LoginPage = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const handleClick = () => {
    history.push("/signup");
  }

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(res => {
        // console.log('signInWithEmailAndPassword', res)
        authContext.setUser(res);
        history.push("/");
      })
      .catch(error => {
        console.log(error.message);
        alert(error.message);
      });
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="username" className="p-4 border rounded" name="email" value={values.email} placeholder="Enter your Email" onChange={handleChange} /><br /><br />
        <input type="password" autoComplete="current-password" className="p-4 border rounded" name="password" value={values.password} placeholder="Enter your Password" onChange={handleChange} /><br /><br />
        <button type="submit" className="p-4 border rounded bg-purple-800 text-white">Login</button>
        <p>Not logged in yet?</p>
        <button type="button" className="p-4 border rounded bg-yellow-600 text-white" onClick={handleClick}>SignUp</button>
      </form>
    </div>
  );
}
