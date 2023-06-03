import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [isMatch, setIsMatch] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMatch(e.matches);
    };

    // Verificar el estado inicial del media query
    setIsMatch(mediaQuery.matches);

    // Agregar el listener para detectar cambios en el media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [query]);

  return isMatch;
}