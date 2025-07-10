import butterChicken from "../assets/images/butterChicken.jpg";
import palakPaneer from "../assets/images/palakPaneer.jpg";
import biryani from "../assets/images/biryani.jpg";
import masalaDosa from "../assets/images/masala-dosa.jpg";
import choleBhature from "../assets/images/chole-bhature.jpg";
import rajmaChawal from "../assets/images/rajma-chawal-1.jpg";
import paneerTikka from "../assets/images/paneer-tikka.jpg";
import gulabJamun from "../assets/images/gulab-jamun.webp";
import pooriSabji from "../assets/images/poori-sabji.webp";
import roganJosh from "../assets/images/rogan-josh.jpg";

export const startersItem = [
  {
    id: 1,
    name: "Paneer Tikka",
    image: paneerTikka,
    price: 1200,
    category: "Starters",
  },
  {
    id: 2,
    name: "Masala Dosa",
    image: masalaDosa,
    price: 1000,
    category: "Starters",
  },
  { id: 3, name: "Samosa", price: 600, category: "Starters" },
  { id: 4, name: "Spring Rolls", price: 750, category: "Starters" },
  { id: 5, name: "Aloo Tikki", price: 700, category: "Starters" },
  { id: 6, name: "Chili Paneer", price: 950, category: "Starters" },
  { id: 7, name: "Pakora", price: 500, category: "Starters" },
  { id: 8, name: "Hara Bhara Kebab", price: 800, category: "Starters" },
];

export const mainCourse = [
  {
    id: 1,
    name: "Butter Chicken",
    image: butterChicken,
    price: 1800,
    category: "Main Course",
  },
  {
    id: 2,
    name: "Palak Paneer",
    image: palakPaneer,
    price: 1500,
    category: "Main Course",
  },
  { id: 3, name: "Chicken Curry", price: 1700, category: "Main Course" },
  { id: 4, name: "Dal Makhani", price: 1300, category: "Main Course" },
  { id: 5, name: "Paneer Butter Masala", price: 1600, category: "Main Course" },
  { id: 6, name: "Kadai Chicken", price: 1750, category: "Main Course" },
  { id: 7, name: "Fish Curry", price: 1900, category: "Main Course" },
  {
    id: 8,
    name: "Mutton Rogan Josh",
    image: roganJosh,
    price: 2000,
    category: "Main Course",
  },
];

export const beverages = [
  { id: 1, name: "Chai", price: 500, category: "Beverages" },
  { id: 2, name: "Mango Lassi", price: 700, category: "Beverages" },
  { id: 3, name: "Cold Coffee", price: 800, category: "Beverages" },
  { id: 4, name: "Lemon Soda", price: 550, category: "Beverages" },
  { id: 5, name: "Orange Juice", price: 650, category: "Beverages" },
  { id: 6, name: "Iced Tea", price: 700, category: "Beverages" },
  { id: 7, name: "Buttermilk", price: 400, category: "Beverages" },
  { id: 8, name: "Masala Soda", price: 600, category: "Beverages" },
];

export const soups = [
  { id: 1, name: "Tomato Soup", price: 600, category: "Soups" },
  { id: 2, name: "Sweet Corn Soup", price: 650, category: "Soups" },
  { id: 3, name: "Hot & Sour Soup", price: 700, category: "Soups" },
  { id: 4, name: "Manchow Soup", price: 750, category: "Soups" },
  { id: 5, name: "Mushroom Soup", price: 800, category: "Soups" },
  { id: 6, name: "Veg Clear Soup", price: 550, category: "Soups" },
  { id: 7, name: "Chicken Soup", price: 850, category: "Soups" },
  { id: 8, name: "Broccoli Soup", price: 700, category: "Soups" },
];

export const desserts = [
  {
    id: 1,
    name: "Gulab Jamun",
    image: gulabJamun,
    price: 800,
    category: "Desserts",
  },
  {
    id: 2,
    name: "Rajma Chawal",
    image: rajmaChawal,
    price: 900,
    category: "Desserts",
  },
  { id: 3, name: "Rasgulla", price: 750, category: "Desserts" },
  { id: 4, name: "Ice Cream Sundae", price: 850, category: "Desserts" },
  { id: 5, name: "Kheer", price: 700, category: "Desserts" },
  { id: 6, name: "Jalebi", price: 650, category: "Desserts" },
  { id: 7, name: "Brownie", price: 950, category: "Desserts" },
  { id: 8, name: "Fruit Custard", price: 600, category: "Desserts" },
];

export const pizzas = [
  { id: 1, name: "Veggie Pizza", price: 1300, category: "Pizzas" },
  { id: 2, name: "Cheese Pizza", price: 1400, category: "Pizzas" },
  { id: 3, name: "Pepperoni Pizza", price: 1600, category: "Pizzas" },
  { id: 4, name: "Paneer Pizza", price: 1500, category: "Pizzas" },
  { id: 5, name: "BBQ Chicken Pizza", price: 1700, category: "Pizzas" },
  { id: 6, name: "Mushroom Pizza", price: 1450, category: "Pizzas" },
  { id: 7, name: "Hawaiian Pizza", price: 1600, category: "Pizzas" },
  { id: 8, name: "Margherita Pizza", price: 1350, category: "Pizzas" },
];

export const alcoholicDrinks = [
  { id: 1, name: "Beer", price: 1500, category: "Alcoholic Drinks" },
  { id: 2, name: "Wine", price: 2000, category: "Alcoholic Drinks" },
  { id: 3, name: "Whiskey", price: 2500, category: "Alcoholic Drinks" },
  { id: 4, name: "Rum", price: 2200, category: "Alcoholic Drinks" },
  { id: 5, name: "Vodka", price: 2300, category: "Alcoholic Drinks" },
  { id: 6, name: "Gin", price: 2100, category: "Alcoholic Drinks" },
  { id: 7, name: "Tequila", price: 2600, category: "Alcoholic Drinks" },
  { id: 8, name: "Brandy", price: 2400, category: "Alcoholic Drinks" },
];

export const salads = [
  { id: 1, name: "Greek Salad", price: 1100, category: "Salads" },
  { id: 2, name: "Caesar Salad", price: 1200, category: "Salads" },
  { id: 3, name: "Fruit Salad", price: 1000, category: "Salads" },
  { id: 4, name: "Garden Fresh Salad", price: 950, category: "Salads" },
  { id: 5, name: "Pasta Salad", price: 1050, category: "Salads" },
  { id: 6, name: "Quinoa Salad", price: 1150, category: "Salads" },
  { id: 7, name: "Spinach Salad", price: 900, category: "Salads" },
  { id: 8, name: "Corn Salad", price: 950, category: "Salads" },
];

export const popularDishes = [
  {
    id: 1,
    image: butterChicken,
    name: "Butter Chicken",
    numberOfOrders: 250,
  },
  {
    id: 2,
    image: palakPaneer,
    name: "Palak Paneer",
    numberOfOrders: 190,
  },
  {
    id: 3,
    image: biryani,
    name: "Hyderabadi Biryani",
    numberOfOrders: 300,
  },
  {
    id: 4,
    image: masalaDosa,
    name: "Masala Dosa",
    numberOfOrders: 220,
  },
  {
    id: 5,
    image: choleBhature,
    name: "Chole Bhature",
    numberOfOrders: 270,
  },
  {
    id: 6,
    image: rajmaChawal,
    name: "Rajma Chawal",
    numberOfOrders: 180,
  },
  {
    id: 7,
    image: paneerTikka,
    name: "Paneer Tikka",
    numberOfOrders: 210,
  },
  {
    id: 8,
    image: gulabJamun,
    name: "Gulab Jamun",
    numberOfOrders: 310,
  },
  {
    id: 9,
    image: pooriSabji,
    name: "Poori Sabji",
    numberOfOrders: 140,
  },
  {
    id: 10,
    image: roganJosh,
    name: "Rogan Josh",
    numberOfOrders: 160,
  },
];

export const tables = [
  { id: 1, name: "Table 1", status: "Booked", initial: "AM", seats: 4 },
  { id: 2, name: "Table 2", status: "Available", initial: "MB", seats: 2 },
  { id: 3, name: "Table 3", status: "Booked", initial: "JS", seats: 6 },
  { id: 4, name: "Table 4", status: "Available", initial: "HR", seats: 4 },
  { id: 5, name: "Table 5", status: "Booked", initial: "PL", seats: 2 },
  { id: 6, name: "Table 6", status: "Available", initial: "RT", seats: 6 },
  { id: 7, name: "Table 7", status: "Booked", initial: "LC", seats: 4 },
  { id: 8, name: "Table 8", status: "Available", initial: "DP", seats: 2 },
  { id: 9, name: "Table 9", status: "Booked", initial: "NK", seats: 4 },
  { id: 10, name: "Table 10", status: "Available", initial: "SB", seats: 3 },
  { id: 11, name: "Table 11", status: "Booked", initial: "GT", seats: 6 },
  { id: 12, name: "Table 12", status: "Available", initial: "JS", seats: 2 },
  { id: 13, name: "Table 13", status: "Booked", initial: "EK", seats: 4 },
  { id: 14, name: "Table 14", status: "Available", initial: "QN", seats: 5 },
  { id: 15, name: "Table 15", status: "Booked", initial: "TW", seats: 6 },
  { id: 16, name: "Table 16", status: "Available", initial: "LP", seats: 4 },
  { id: 17, name: "Table 17", status: "Booked", initial: "MF", seats: 2 },
  { id: 18, name: "Table 18", status: "Available", initial: "AK", seats: 4 },
  { id: 19, name: "Table 19", status: "Booked", initial: "NR", seats: 6 },
  { id: 20, name: "Table 20", status: "Available", initial: "OS", seats: 4 },
];

export const menus = [
  {
    id: 1,
    name: "Starters",
    bgColor: "#b73e3e",
    icon: "🍲",
    items: startersItem,
  },
  {
    id: 2,
    name: "Main Course",
    bgColor: "#5b45b0",
    icon: "🍛",
    items: mainCourse,
  },
  {
    id: 3,
    name: "Beverages",
    bgColor: "#7f167f",
    icon: "🍹",
    items: beverages,
  },
  { id: 4, name: "Soups", bgColor: "#735f32", icon: "🍜", items: soups },
  { id: 5, name: "Desserts", bgColor: "#1d2569", icon: "🍰", items: desserts },
  { id: 6, name: "Pizzas", bgColor: "#285430", icon: "🍕", items: pizzas },
  {
    id: 7,
    name: "Alcoholic Drinks",
    bgColor: "#b73e3e",
    icon: "🍺",
    items: alcoholicDrinks,
  },
  { id: 8, name: "Salads", bgColor: "#5b45b0", icon: "🥗", items: salads },
];
