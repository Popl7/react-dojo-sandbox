import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";

export function AboutPage() {
  const history = useHistory();

  const db = firebase.firestore();
  const userId = firebase.auth().currentUser.uid
  const citiesRef = db.collection('users').doc(userId).collection("cities");
  const [name, setName] = useState('')

  const sharedCitiesRef = db.collection('cities');
  const [sharedName, setSharedName] = useState('')

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
      setDocs(querySnapshot.docs.map((doc) => {
        return {...doc.data(), id: doc.id}
      }))
    });
    return () => {
      console.debug('UNloading docs');
      unsubscribe();
    }
  }, [])

  const addData = async ({ value }) => {
    try {
      console.debug('ADDING', value)
      await citiesRef.doc().set({
        name: value,
      })
      console.info("Document successfully added!");
      setName('')
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
  const saveData = async ({ key, value }) => {
    try {
      console.debug('SAVING', key, value)
      await citiesRef.doc(key).set({
        name: value,
      })
      console.info("Document successfully written!");
      setName('')
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  }
  const deleteData = async (key) => {
    try {
      console.debug('DELETING', key)
      await citiesRef.doc(key).delete()
      console.info("Document successfully deleted!");
    } catch (error) {
      console.error("Error deleting document: ", error);

    }
  }

  // Shared

  const [sharedDocs, setSharedDocs] = useState([]);

  useEffect(() => {
    console.debug('loading shared docs');
    const unsubscribe = sharedCitiesRef.onSnapshot((querySnapshot) => {
      setSharedDocs(querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      }))
    });
    return () => {
      console.debug('UNloading shared docs');
      unsubscribe();
    }
  }, [])

  const addSharedData = async ({ value }) => {
    try {
      console.debug('ADDING', value)
      await sharedCitiesRef.doc().set({
        name: value,
      })
      console.info("Shared document successfully added!");
      setSharedName('')
    } catch (error) {
      console.error("Error adding shared document: ", error);
    }
  }
  const saveSharedData = async ({ key, value }) => {
    try {
      console.debug('SAVING', key, value)
      await sharedCitiesRef.doc(key).set({
        name: value,
      })
      console.info("Shared document successfully written!");
      setName('')
    } catch (error) {
      console.error("Error writing shared document: ", error);
    }
  }
  const deleteSharedData = async (key) => {
    try {
      console.debug('DELETING', key)
      await sharedCitiesRef.doc(key).delete()
      console.info("Shared document successfully deleted!");
    } catch (error) {
      console.error("Error deleting shared document: ", error);

    }
  }

  return (
    <div>
      <h1>About</h1>
      <button className="p-4 border rounded bg-purple-800 text-white" onClick={handleClick}>Logout</button>
      <br /><br /><br /><br /><br /><br />

      <h2>Private</h2>
      <ul>
        {docs.map(doc => (
          <li key={doc.id}>
            <input type="text" value={doc.name}
              className="p-4 border rounded"
              onChange={(e) => saveData({ key: doc.id, value: e.target.value})}
            />
            <button type="button"
              className="p-4 border rounded bg-red-800 text-white"
              onClick={() => deleteData(doc.id)}
            >✕</button>
          </li>
        ))}
      </ul>
      <input type="text" value={name}
        placeholder="enter a name"
        className="mt-4 p-4 border rounded"
        onChange={(e) => setName(e.target.value)} />
      <button className="p-4 border rounded bg-green-800 text-white"
        onClick={() => addData({ value: name })}>＋</button>

      <br /><br /><br /><br /><br /><br />

      <h2>Shared</h2>
      <ul>
        {sharedDocs.map(doc => (
          <li key={doc.id}>
            <input type="text" value={doc.name}
              className="p-4 border rounded"
              onChange={(e) => saveSharedData({ key: doc.id, value: e.target.value })}
            />
            <button type="button"
              className="p-4 border rounded bg-red-800 text-white"
              onClick={() => deleteSharedData(doc.id)}
            >✕</button>
          </li>
        ))}
      </ul>
      <input type="text" value={sharedName}
        placeholder="enter a name"
        className="mt-4 p-4 border rounded"
        onChange={(e) => setSharedName(e.target.value)} />
      <button className="p-4 border rounded bg-green-800 text-white"
        onClick={() => addSharedData({ value: sharedName })}>＋</button>

    </div>
  );
}
