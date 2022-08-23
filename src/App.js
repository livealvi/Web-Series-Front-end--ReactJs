import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import WithoutNav from "./components/WithoutNav/WithoutNav";
import WithNav from "./components/WithNav/WithNav";
import SignUp from "./components/SignUp/SignUp";
import Users from "./components/Users/Users";
import UserDetail from "./components/UserDetail/UserDetail";
import NotFound from "./components/NotFound/NotFound";
import UserEdit from "./components/UserEdit/UserEdit";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<WithNav />}>
            <Route index path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="/user/edit/:id" element={<UserEdit />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<WithoutNav />}>
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
