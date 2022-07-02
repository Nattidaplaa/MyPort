import "./App.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience"

import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/education" element={<Education/>}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
