import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
