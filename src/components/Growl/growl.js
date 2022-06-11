import React, { useState, useEffect } from "react";

import "./growl.css";

export const Growl = ({ active, message, onDismissed }) => (
  <div className={`growl${active ? " active" : ""}`}>
    {message}
    <div onClick={onDismissed} className="growl-close" />
  </div>
);

export function useGrowl() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setGrowlActive(false);
    }, 3000);
  });
  // state of the growl
  const [growlActive, setGrowlActive] = useState(false);
  const close = () => setGrowlActive(false);
  const open = () => setGrowlActive(true);

  return {
    growlActive,
    close,
    open,
  };
}
