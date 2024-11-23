import Body from "./components/Body";
import "./App.css";
import About from "./components/About";
import Team from "./components/Team";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import Accordian from "./components/Accordian";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div>
      <header className="heading">
        <div className="header-container">
          <h1 className="logo">My Site</h1>
          <nav className="navStyle">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/team">Team</a>
            <a href="/login">Login</a>
            <a href="/accordian">Accordian</a>
          </nav>
          <select
            className="language-selector"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="sp">Spanish</option>
            <option value="ru">Russina</option>
          </select>
        </div>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/team" element={<Team />} />
          </Route>

          <Route path="/login" element={<Login />} />

          <Route path="/accordian" element={<Accordian />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
