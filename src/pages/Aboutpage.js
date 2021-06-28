import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";

export function AboutPage() {
  const history = useHistory();

  const db = firebase.firestore();
  const citiesRef = db.collection("cities");

  const handleClick = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signOut()
      // .then(res => {
      //   history.push("/login");
      // })
  }

  const [docs, setDocs] = useState([]);

  useEffect(() => {
    console.debug('loading docs');
    const unsubscribe = citiesRef.onSnapshot((querySnapshot) => {
      setDocs(querySnapshot.docs.map((doc) => doc.data()))
    });
    return () => {
      console.debug('UNloading docs');
      unsubscribe();
    }
  }, [])

  const addData = async () => {
    try {
      await citiesRef.doc("ZE").set({
        name: "Zeist",
        state: "UT",
        country: "The Netherlands"
      })
      console.info("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);

    }
  }

  return (
    <div>
      <h1>About</h1>
      <button className="p-4 border rounded bg-purple-800 text-white" onClick={handleClick}>Logout</button>
      <br /><br /><br /><br /><br /><br />

      {/* <p>{JSON.stringify(docs, null, 2)}</p> */}
      <ul>
        {docs.map(doc => (
          <li>
            {doc.name}
          </li>
        ))}
      </ul>
      <button className="p-4 border rounded bg-purple-800 text-white" onClick={addData} >Add</button>
    </div>
  );
}
