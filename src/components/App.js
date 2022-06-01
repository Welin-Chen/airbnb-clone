import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import Home from "./Home/Home";
import SearchPage from "./SearchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/search" element={[<SearchPage />]} />
          <Route path="/" element={[<Home />]} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
