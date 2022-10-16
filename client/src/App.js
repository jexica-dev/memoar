import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./screens/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
