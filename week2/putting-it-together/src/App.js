import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Belcher"}
        firstName={"Bob"}
        age={46}
        hair={"black"}
      />
      <PersonCard
        lastName={"Belcher"}
        firstName={"Linda"}
        age={44}
        hair={"black"}
      />
      <PersonCard
        lastName={"Belcher"}
        firstName={"Tina"}
        age={14}
        hair={"black"}
      />
      <PersonCard
        lastName={"Belcher"}
        firstName={"Gene"}
        age={11}
        hair={"black"}
      />
      <PersonCard
        lastName={"Belcher"}
        firstName={"Louise"}
        age={9}
        hair={"black"}
      />
    </div>
  );
}
export default App;