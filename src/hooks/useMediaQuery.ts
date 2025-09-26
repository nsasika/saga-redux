import { useState, useEffect } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = () => setMatches(media.matches);

    handleChange(); // Check on initial render
    media.addEventListener("change", handleChange); // Listen for changes

    return () => {
      media.removeEventListener("change", handleChange); // Cleanup on unmount
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
