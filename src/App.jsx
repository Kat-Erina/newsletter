import { Route, Routes } from "react-router-dom";
import "./App.css";
import Newsletter from "./pages/Newsletter";
import Subscribe from "./pages/Subscribe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Newsletter />}></Route>
      <Route path="/subscribe" element={<Subscribe />}></Route>
    </Routes>
  );
}

export default App;
