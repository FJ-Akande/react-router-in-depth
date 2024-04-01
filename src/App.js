import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";
import Navbar from "./components/navbar/navbar.component";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
