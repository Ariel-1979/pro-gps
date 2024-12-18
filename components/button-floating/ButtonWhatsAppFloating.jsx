"use client";
import useFloatingButtonVisibility from "@/app/hooks/useFloatingButtonVisibility";
import { useState, useEffect } from "react";
import ButtonFloating from "./ButtonFloatting";

export default function ButtonWhatsappFloating() {
  const [mounted, setMounted] = useState(false);
  const showFloatingButton = useFloatingButtonVisibility();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{showFloatingButton && <ButtonFloating />}</>;
}
