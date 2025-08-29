import React, { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";

export default function VantaBackground({ children }) {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          minHeight: 600,
          minWidth: 800,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x00ff00, // neon green
          backgroundColor: 0x000000,
          points: 15,
          maxDistance: 20,
          spacing: 20,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="w-full h-screen relative">{children}</div>;
}