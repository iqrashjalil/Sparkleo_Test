import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./auth/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />

          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
