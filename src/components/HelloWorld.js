import React from "react";

export function HelloWorld({ name = "World" }) {
  return <h4 className="text-purple-700">Hello {name}!</h4>;
}
