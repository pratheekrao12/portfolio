"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (event: PointerEvent) => {
      if (window.innerWidth < 768) {
        setVisible(false);
        return;
      }

      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const hideGlow = () => setVisible(false);

    window.addEventListener("pointermove", updatePosition);
    window.addEventListener("pointerleave", hideGlow);

    return () => {
      window.removeEventListener("pointermove", updatePosition);
      window.removeEventListener("pointerleave", hideGlow);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 hidden md:block transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.18),rgba(168,85,247,0.10),transparent_60%)] blur-3xl"
        style={{
          width: "24rem",
          height: "24rem",
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
}
