import React from "react";
import { Link } from "react-router-dom";

export default function Page1() {
  return (
    <div>
      <h1>Willkommen auf Seite 1</h1>
      <Link to="/super">Zur Übung</Link>
    </div>
  );
}
