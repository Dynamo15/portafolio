import { createContext, useState, useEffect } from "react";
import es from "../data/i18n/es.json";
import en from "../data/i18n/en.json";

export const LanguageContext = createContext({
  language: "es",
  setLanguage: () => {},
  t: () => "",
});

const languages = { es, en };

// Detecta idioma del navegador
const detectLanguage = () => {
  const lang = navigator.language || "";
  if (lang.startsWith("en")) return "en";
  return "es";
};

// Obtiene idioma inicial
const getInitialLanguage = () => {
  const saved = localStorage.getItem("language");
  return saved || detectLanguage();
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage());

  // Guarda en localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Función de traducción
  const t = (path) => {
    const keys = path.split(".");
    let value = languages[language];

    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) return path;
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};