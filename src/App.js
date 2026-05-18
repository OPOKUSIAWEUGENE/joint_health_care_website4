
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewApplication from "./NewApplication/NewApplication";
import "./App.css";
import SentApplication from "./NewApplication/SentApplication";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/new-application" element={<NewApplication />} />
        <Route path="/sent-application" element={<SentApplication />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
