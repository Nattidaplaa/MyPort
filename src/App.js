import "./App.css";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
/* import { Route, Routes } from "react-router-dom"; */

function App() {
  return (
    <div className="container">
      {/*         <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          </Routes>  */}
      <Home />
      <Profile />
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
