import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MarkdownEditor from "./pages/MarkdownEditor";

const App: React.FC = () => {
  const [documentCount, setDocumentCount] = useState(1);

  const handleNewDocument = () => {
    setDocumentCount((prev) => prev + 1);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar
          handleNewDocument={handleNewDocument}
          documentCount={documentCount}
        />
        <Routes>
          {/* Default route for welcome document */}
          <Route
            path="/"
            element={<MarkdownEditor documentName="welcome.md" />}
          />

          {/* Dynamically generate routes for new documents */}
          {[...Array(documentCount)].map((_, index) => (
            <Route
              key={index}
              path={`/doc${index + 1}`}
              element={<MarkdownEditor documentName={`DOC${index + 1}`} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
