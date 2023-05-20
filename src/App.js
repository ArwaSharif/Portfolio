import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./pages/MainPage/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

