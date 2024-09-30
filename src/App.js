import React from "react";
import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SmokeTrees User Registration</h1>
      </header>
      <main>
        <UserForm />
      </main>
    </div>
  );
}

export default App;
