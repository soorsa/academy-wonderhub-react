import type React from "react";

interface LoaderProps {
  className?: string;
}

const Loader2: React.FC<LoaderProps> = ({ className = "" }) => {
  const rotations = [
    "rotate-0",
    "rotate-45",
    "rotate-90",
    "rotate-[135deg]",
    "rotate-180",
    "rotate-[225deg]",
    "rotate-270",
    "rotate-[315deg]",
  ];

  return (
    <div className={`relative flex items-center justify-start ${className}`}>
      {rotations.map((rotation, i) => {
        const delay = -0.9 * ((8 - i) / 8); // match animation offset
        return (
          <div
            key={i}
            className={`absolute top-0 left-0 flex items-center justify-start w-full h-full ${rotation}`}
          >
            <div
              className="w-[20%] h-[20%] rounded-full bg-wonderhub opacity-50 animate-pulse-dot shadow-[0_0_20px_rgba(18,31,53,0.3)]"
              style={{
                animationDelay: `${delay}s`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Loader2;
