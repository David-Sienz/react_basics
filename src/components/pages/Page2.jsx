import React from "react";
import { Link } from "react-router-dom";

export default function Page2() {
  return (
    <div>
      <h1>Willkommen auf Seite 2</h1>
      <Link to="/">Zurück zur Startseite</Link>
    </div>
  );
}
