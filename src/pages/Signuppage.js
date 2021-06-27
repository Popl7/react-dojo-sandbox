import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../AuthProvider";

export const SignupPage = () => {
  const authContext = useContext(AuthContext);

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""
  });

  const history = useHistory();
  const handleClick = () => {
    history.push("/login")
  }

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  }
  const handleSubmit = (event) => {
    event?.preventDefault();
    console.log(values, 'values');
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        authContext.setUser(userCredential);
        const db = firebase.firestore();
        db.collection("Users")
          .doc(userCredential.user.uid)
          .set({
            email: values.email,
            username: values.username,
            phone: values.phone
          })
          .then(() => {
            console.log('ok');
            history.push("/");
          })
          .catch(error => {
            console.log(error.message);
            alert(error.message);
          });
      })
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="username" className="p-4 border rounded" name="username" placeholder="Username" onChange={handleChange} /><br /><br />
        <input type="text" autoComplete="tel" className="p-4 border rounded" name="phone" placeholder="Phone" onChange={handleChange} /><br /><br />
        <input type="text" autoComplete="email" className="p-4 border rounded" name="email" placeholder="Enter your Email" onChange={handleChange} /><br /><br />
        <input type="password" autoComplete="new-password"  className="p-4 border rounded" name="password" placeholder="Enter your Password" onChange={handleChange} /><br /><br />
        <button className="p-4 border rounded bg-purple-800 text-white" type="submit">Sign Up</button>
        <p>Already have account?</p>
        <button type="button" className="p-4 border rounded bg-yellow-600 text-white" onClick={handleClick}>Login</button>
      </form>
    </div>
  );
}
