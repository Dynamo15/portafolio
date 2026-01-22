import { createContext, useState } from "react";
import es from "../data/i18n/es.json";
import en from "../data/i18n/en.json";

export const LanguageContext = createContext(null);

const languages = { es, en };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const value = {
    language,
    setLanguage,
    t: languages[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
