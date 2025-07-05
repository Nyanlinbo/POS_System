export const getRandomBG = () => {
  const colors = [
    "#F1C40F", // Yellow
    "#8E44AD", // Purple
    "#E67E22", // Orange
    "#F0F8FF", // Alice Blue
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return "bg-[" + color + "]";
};
