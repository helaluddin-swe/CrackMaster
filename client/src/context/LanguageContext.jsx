import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translationData";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Global app language (persisted)
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("app_global_lang") || "en";
  });

  // Optional page-level override (null = use global)
  const [pageLanguage, setPageLanguage] = useState(null);

  // Persist global language
  useEffect(() => {
    localStorage.setItem("app_global_lang", language);
  }, [language]);

  // Page override takes priority when set
  const activeLanguage = pageLanguage ?? language;

  // Translation helper for UI strings
  const t = (key) => {
    const keys = key.split(".");
    let current = translations[activeLanguage];

    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to English
        let fallback = translations.en;
        for (const fk of keys) {
          fallback = fallback?.[fk];
        }
        return fallback ?? key;
      }
    }
    return current;
  };

  // Helper for course content (title, content, options, etc.)
  // Works with both legacy strings/arrays and localized objects
  const resolve = (obj) => {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    if (Array.isArray(obj)) return obj;
    if (typeof obj === "object") {
      return (
        obj[activeLanguage] ||
        obj.en ||
        obj.bn ||
        Object.values(obj)[0] ||
        ""
      );
    }
    return "";
  };

  return (
    <LanguageContext.Provider
      value={{
        language,          // global language
        setLanguage,       // change global language
        pageLanguage,      // page-level override (or null)
        setPageLanguage,   // set/clear page override
        activeLanguage,    // the language currently in use
        t,                 // for UI translations
        resolve,           // for course content (title/content/options)
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};