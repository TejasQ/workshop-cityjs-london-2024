import React from "react";

export function App() {
  return (
    <main>
      <h1>My Todos</h1>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            <span>Buy milk</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>Buy eggs</span>
          </label>
        </li>
      </ul>
    </main>
  );
}
