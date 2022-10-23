import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./screens/Main";
import About from "./screens/About";
import Demo from "./screens/Demo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  );
}

export default App;
