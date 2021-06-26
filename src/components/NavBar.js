import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  const menuItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Counter", url: "/counter" }
  ];

  return (
    <nav className="flex justify-between bg-purple-800 shadow-lg">
      <ul className="flex">
        {menuItems.map(({ name, url }) => (
          <Link
            to={url}
            className="px-4 py-4 hover:bg-purple-700 hover:no-underline"
          >
            <li className="text-white">{name}</li>
          </Link>
        ))}
      </ul>
      <ul className="flex h-full bg-purple-800 shadow-lg">
        <Link
          to="/help"
          className="px-4 py-4 hover:bg-purple-700 hover:no-underline"
        >
          <li className="text-white">Help</li>
        </Link>
      </ul>
    </nav>
  );
}
