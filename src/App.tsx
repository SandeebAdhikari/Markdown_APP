import React from "react";
import MarkdownEditor from "./pages/MarkdownEditor";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <MarkdownEditor />
    </div>
  );
};

export default App;
