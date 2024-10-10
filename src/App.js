import "./App.css";
import Inicio from "./components/Inicio";
import { Routes, Route } from "react-router-dom";
import Exames from "./components/Exames";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/exames" element={<Exames />} />
      </Routes>
    </div>
  );
}

export default App;
