import { useEffect, useRef } from "react";

// Animated floating blobs as a background layer
const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden gradient-bg">
      {/* Animated gradient blobs */}
      <div
        className="absolute top-1/4 -left-20 w-72 h-72 rounded-full opacity-20 animate-blob"
        style={{ background: "hsl(260, 80%, 65%)", filter: "blur(80px)" }}
      />
      <div
        className="absolute top-3/4 right-10 w-96 h-96 rounded-full opacity-15 animate-blob"
        style={{ background: "hsl(220, 70%, 55%)", filter: "blur(100px)", animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-10 animate-blob"
        style={{ background: "hsl(280, 70%, 60%)", filter: "blur(90px)", animationDelay: "4s" }}
      />
      <div
        className="absolute -top-10 right-1/3 w-80 h-80 rounded-full opacity-10 animate-pulse-glow"
        style={{ background: "hsl(260, 60%, 50%)", filter: "blur(120px)" }}
      />
    </div>
  );
};

export default ParticleBackground;
