import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [changeTheme, setChangeTheme] = useContext(ThemeContext);
  return (
    <div
      onClick={() => {
        setChangeTheme(changeTheme === "light" ? "dark" : "light");
      }}
    >
      <span>
        {changeTheme == "light" ? "Light Mode On" : "Dark Mode is on"}
      </span>
    </div>
  );
};
export default ThemeToggler;
