import React, { useState } from "react";
import { HelloWorld } from "../components/HelloWorld";

export function CounterPage() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Dojo");

  return (
    <div>
      <button
        type="button"
        className="border p-4 bg-purple-800 hover:bg-purple-700 text-white rounded"
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {count}
      </button>

      <div className="mt-4">
        <HelloWorld />
      </div>

      <div className="mt-4">
        <h5>Name:</h5>
        <input
          type="text"
          className="p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <HelloWorld name={name} />
      </div>
    </div>
  );
}
