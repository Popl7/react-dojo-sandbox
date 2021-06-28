import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../AuthProvider';
import firebase from "../firebase";

export function NavBar() {
  const { authenticated } = React.useContext(AuthContext)

  const menuItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Counter", url: "/counter" }
  ];

  const logout = () => {
    firebase
      .auth()
      .signOut()
  }

  return (
    <nav className="flex justify-between bg-purple-800 shadow-lg items-center">
      <ul className="flex">
        {menuItems.map(({ name, url }) => (
          <li key={url} className="text-white">
          <Link
            to={url}
              className="text-white block px-4 py-4 hover:bg-purple-700 hover:no-underline"
          >{name}
          </Link>
          </li>
        ))}
      </ul>
      <ul className="flex">
        <li>
        {authenticated ? (
        <button
              className="text-white block px-4 py-4 hover:bg-purple-700 hover:no-underline"
          onClick={logout}
          >Logout
            </button>
        ) : (
              <Link
                to="/login"
                className="text-white block px-4 py-4 hover:bg-purple-700 hover:no-underline"
          >Login
              </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
