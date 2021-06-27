import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";

export function AboutPage() {
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signOut()
      // .then(res => {
      //   history.push("/login");
      // })
  }

  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
