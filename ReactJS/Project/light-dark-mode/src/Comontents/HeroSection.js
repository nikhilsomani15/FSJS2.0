import React, { useContext } from "react";
import AppTheme from "../Color";
import ThemeContext from "../Context/ThemeContext";

const HeroSection = () => {
  let [theme, setTheme] = useContext(ThemeContext);
  let currTheme = AppTheme[theme];
  return (
    <div
      style={{
        backgroundColor: `${currTheme.backgroundColor}`,
        color: `${currTheme.color}`,
        textAlign: "center",
        padding: "1rem",
        height: "100vh",
      }}
    >
      <h1>COntext APi app</h1>
      <p>Hi I am Paragraph</p>
      <button
        onClick={() => setTheme(theme == "light" ? "dark" : "light")}
        style={{
          padding: "10px 90px",
          border: `${currTheme.border}`,
          backgroundColor: "green",
          cursor: "pointer",
          color: `${currTheme.color}`,
        }}
      >
        Click Me
      </button>
    </div>
  );
};
export default HeroSection;
