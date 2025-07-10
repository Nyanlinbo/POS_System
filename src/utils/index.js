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

export const getBgColor = () => {
  const bgarr = [
    "#f32c2c",
    "#eebd25",
    "#63e423",
    "#2e4a40",
    "#13f3ac",
    "#31adf0",
    "#6c63fb",
    "#d12ef1",
    "#aa5262",
  ];
  const randomBg = Math.floor(Math.random() * bgarr.length);
  const color = bgarr[randomBg];
  return color;
};
