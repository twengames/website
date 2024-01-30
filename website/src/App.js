import React from "react";
import { Navbar } from "./header/navbar/navbar";
import { Content } from "./header/content/content";

export default function App() {
  return (
    <div className="App">
      <div id="body-content">
      <Navbar />
      <Content />
      </div>
    </div>
  );
}
