"use client";

import { useEffect, useState } from "react";

/** True on devices with a precise hovering pointer (mouse/trackpad). Magnet and tilt effects are desktop-only. */
export function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return fine;
}
