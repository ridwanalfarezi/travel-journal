import React from "react";
import Navbar from "./Nav";
import Journal from "./Journal";
import "./App.css";
import data from "./data";

function App() {
  const journals = data.map((journal) => {
    return <Journal key={journal.title} {...journal} />;
  });

  return (
    <div className="container">
      <Navbar />
      <div className="journal-list">
        {journals}
      </div>
    </div>
  );
}

export default App;
