import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const menuItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Counter", url: "/counter" }
  ];

  return (
    <nav>
      <ul className="flex h-full bg-purple-800 shadow-lg text-white">
        {menuItems.map(({ name, url }) => (
          <Link to={url} className="px-4 py-2 hover:bg-purple-700">
            <li>{name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
