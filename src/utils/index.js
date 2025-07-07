export const getRandomBG = () => {
  const colors = [
    "bg-yellow-500",
    "bg-purple-700",
    "bg-orange-300",
    "bg-blue-100",
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
};
