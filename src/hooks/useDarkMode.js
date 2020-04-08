import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (initalValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", initalValue);

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);
  return [darkMode, setDarkMode];
};
