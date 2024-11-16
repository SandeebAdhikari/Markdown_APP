import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MarkdownEditor from "./pages/MarkdownEditor";

interface Document {
  name: string;
  content: string;
  date: string;
}

const App: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    const savedDocuments = JSON.parse(
      localStorage.getItem("documents") || "[]"
    );
    setDocuments(savedDocuments);
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MarkdownEditor documents={documents} />} />
        <Route
          path="/:docId"
          element={<MarkdownEditor documents={documents} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
