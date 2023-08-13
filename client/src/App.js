import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleParadox from "./components/singleParadox/SingleParadox";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path={"/"} element={<Main />}></Route>
      </Routes>
      <Routes>
        <Route exact path={"/paradox/:id"} element={<SingleParadox />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
