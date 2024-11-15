import React from "react";
import MarkdownEditor from "./components/MarkdownEditor";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <MarkdownEditor />
    </div>
  );
};

export default App;
