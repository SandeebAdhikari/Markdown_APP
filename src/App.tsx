import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MarkdownEditor from "./pages/MarkdownEditor";

const App: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  // Load documents from localStorage on initial render
  useEffect(() => {
    const savedDocuments = JSON.parse(
      localStorage.getItem("documents") || "[]"
    );
    setDocuments(savedDocuments);
  }, []);

  // Save documents to localStorage whenever the documents array changes
  useEffect(() => {
    localStorage.setItem("documents", JSON.stringify(documents));
  }, [documents]);
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <MarkdownEditor
                documents={documents}
                setDocuments={setDocuments}
              />
            }
          />
          <Route
            path="/doc:docId"
            element={
              <MarkdownEditor
                documents={documents}
                setDocuments={setDocuments}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
