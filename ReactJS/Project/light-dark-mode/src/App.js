import React, { useState } from "react";
import "./App.css";
import Header from "./Comontents/Header";
import HeroSection from "./Comontents/HeroSection";
import ThemeContext from "./Context/ThemeContext";

function App() {
  const hook = useState("dark");
  return (
    <ThemeContext.Provider value={hook}>
      <Header />
      <HeroSection />
    </ThemeContext.Provider>
  );
}

export default App;
