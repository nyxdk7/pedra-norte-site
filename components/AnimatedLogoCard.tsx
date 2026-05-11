"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function AnimatedLogoCard() {
  const [visible, setVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setMousePosition({ x, y });
  }

  function handleMouseLeave() {
    setMousePosition({ x: 0, y: 0 });
  }

  const rotateX = mousePosition.y * -6;
  const rotateY = mousePosition.x * 6;
  const translateX = mousePosition.x * 10;
  const translateY = mousePosition.y * 10;

  return (
    <div className="flex justify-center lg:justify-end">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative w-full max-w-xl transition-all duration-1000 ease-out ${
          visible
            ? "translate-y-0 opacity-100 blur-0"
            : "translate-y-8 opacity-0 blur-sm"
        }`}
        style={{
          perspective: "1000px",
        }}
      >
        <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-[#143987]/10 blur-3xl transition duration-700 group-hover:bg-[#143987]/20" />

        <div
          className="relative overflow-hidden rounded-3xl border border-[#dbe5ff] bg-white/90 p-8 shadow-2xl shadow-[#dbe5ff] backdrop-blur-xl transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#eaf0ff,transparent_35%),radial-gradient(circle_at_bottom_left,#f8fbff,transparent_35%)]" />

          <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-[#143987]/10 blur-2xl" />
          <div className="absolute bottom-6 right-6 h-24 w-24 rounded-full bg-[#143987]/10 blur-2xl" />

          <div className="absolute -left-1/2 top-0 h-full w-1/3 rotate-12 bg-white/50 blur-md transition-all duration-1000 group-hover:left-full" />

          <div
            className="relative transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${translateX}px, ${translateY}px)`,
            }}
          >
            <Image
              src="/images/logo-letras-pretas.png"
              alt="Logo MSM Industrial LTDA"
              width={700}
              height={320}
              priority
              className="h-auto w-full animate-[floatLogo_6s_ease-in-out_infinite] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}