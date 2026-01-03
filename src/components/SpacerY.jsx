// src/components/SpacerY.jsx
export default function SpacerY({ size = "md" }) {
  const map = {
    sm: "h-[8vh] md:h-[10vh]",
    md: "h-[14vh] md:h-[18vh]",
    lg: "h-[20vh] md:h-[26vh]",
  };

  return <div className={map[size]} />;
}
