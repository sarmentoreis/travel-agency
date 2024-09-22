import { useState } from "react";
import { setThemeInLocalStorage } from "../utils/localStorage";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode((previousValue) => !previousValue);
    setThemeInLocalStorage(isDarkMode);
  };

  return {
    isDarkMode,
    setIsDarkMode,
    handleDarkMode,
  };
};

export default useDarkMode;
