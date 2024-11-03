"use client";

import { useEffect, useState } from "react";

export default function useFloatingButtonVisibility() {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerTop =
        document.getElementById("footer")?.offsetTop || Infinity;
      const scrollPosition = window.scrollY + window.innerHeight;
      setShowFloatingButton(
        window.scrollY > 300 && scrollPosition < footerTop - 100
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showFloatingButton;
}
