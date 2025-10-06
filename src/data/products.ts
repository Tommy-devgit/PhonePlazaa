// src/data/products.ts
import img1 from "../assets/productImages/productImage (1).jpg";
import img2 from "../assets/productImages/productImage (2).jpg";
import img3 from "../assets/productImages/productImage (3).jpg";
import img4 from "../assets/productImages/productImage (4).jpg";
import img5 from "../assets/productImages/productImage (5).jpg";
import img6 from "../assets/productImages/productImage (6).jpg";
import img7 from "../assets/productImages/productImage (7).jpg";
import img8 from "../assets/productImages/productImage (8).jpg";
import img9 from "../assets/productImages/productImage (9).jpg";
import img10 from "../assets/productImages/productImage (10).jpg";
import img11 from "../assets/productImages/productImage (11).jpg";
import img12 from "../assets/productImages/productImage (12).jpg";
import img13 from "../assets/productImages/productImage (13).jpg";
import img14 from "../assets/productImages/productImage (14).jpg";
import img15 from "../assets/productImages/productImage (15).jpg";
import img16 from "../assets/productImages/productImage (16).jpg";
import img17 from "../assets/productImages/productImage (17).jpg";
import img18 from "../assets/productImages/productImage (18).jpg";
import img19 from "../assets/productImages/productImage (19).jpg";
import img20 from "../assets/productImages/productImage (20).jpg";
import img21 from "../assets/productImages/productImage (21).jpg";
import img22 from "../assets/productImages/productImage (22).jpg";
import img23 from "../assets/productImages/productImage (23).jpg";
import img24 from "../assets/productImages/productImage (24).jpg";
import img25 from "../assets/productImages/productImage (25).jpg";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  year?: number;
  image: string;
};

export const mobilePhones: Product[] = [
  { id: 1, name: "iPhone 15 Pro", description: "Latest Apple flagship", price: "$999", year: 2025, image: img1 },
  { id: 2, name: "Samsung Galaxy S23", description: "High-end Android phone", price: "$899", year: 2024, image: img2 },
  { id: 3, name: "Google Pixel 8", description: "Clean Android experience", price: "$799", year: 2025, image: img3 },
  { id: 4, name: "OnePlus 12", description: "Fast and sleek", price: "$749", year: 2024, image: img4 },
];

export const chargers: Product[] = [
  { id: 5, name: "Wireless Charger", description: "Fast Qi charger", price: "$49", image: img5 },
  { id: 6, name: "USB-C Cable", description: "Durable 1m cable", price: "$19", image: img6 },
  { id: 7, name: "Power Bank 10000mAh", description: "Portable and compact", price: "$39", image: img7 },
  { id: 8, name: "Car Charger", description: "Dual port fast charging", price: "$29", image: img8 },
];

export const audio: Product[] = [
  { id: 9, name: "Bluetooth Earbuds", description: "Noise-cancelling", price: "$129", image: img9 },
  { id: 10, name: "Wired Headphones", description: "Comfortable fit", price: "$59", image: img10 },
  { id: 11, name: "Bluetooth Speaker", description: "Loud & clear", price: "$79", image: img11 },
  { id: 12, name: "Headphone Adapter", description: "3.5mm to USB-C", price: "$15", image: img12 },
];

export const memory: Product[] = [
  { id: 13, name: "MicroSD 128GB", description: "High-speed memory card", price: "$39", image: img13 },
  { id: 14, name: "USB Flash Drive 64GB", description: "Portable storage", price: "$25", image: img14 },
  { id: 15, name: "External SSD 500GB", description: "Fast backup storage", price: "$129", image: img15 },
  { id: 16, name: "OTG Drive", description: "USB-C compatible", price: "$29", image: img16 },
];

export const wearables: Product[] = [
  { id: 17, name: "Smartwatch", description: "Track your fitness", price: "$199", image: img17 },
  { id: 18, name: "Fitness Band", description: "Monitor activity", price: "$99", image: img18 },
  { id: 19, name: "VR Headset", description: "Mobile compatible VR", price: "$299", image: img19 },
  { id: 20, name: "Smart Glasses", description: "AR experience", price: "$349", image: img20 },
];

export const gaming: Product[] = [
  { id: 21, name: "Gaming Controller", description: "Play like a pro", price: "$59", image: img21 },
  { id: 22, name: "Phone Cooling Fan", description: "Prevent overheating", price: "$39", image: img22 },
  { id: 23, name: "Selfie Stick", description: "Extendable tripod", price: "$25", image: img23 },
  { id: 24, name: "Phone Mount", description: "Car mount holder", price: "$19", image: img24 },
];

export const networking: Product[] = [
  { id: 25, name: "SIM Card", description: "Activate eSIM easily", price: "$9", image: img25 },
  { id: 26, name: "Mobile Wi-Fi", description: "Portable hotspot", price: "$49", image: img1 },
  { id: 27, name: "Portable Router", description: "Connect multiple devices", price: "$79", image: img2 },
  { id: 28, name: "Network Booster", description: "Improve signal strength", price: "$59", image: img3 },
];

export const repair: Product[] = [
  { id: 29, name: "Replacement Screen", description: "Original quality", price: "$149", image: img4 },
  { id: 30, name: "Battery Replacement", description: "Long-lasting", price: "$69", image: img5 },
  { id: 31, name: "Repair Kit", description: "Tools for DIY", price: "$39", image: img6 },
  { id: 32, name: "Cleaning Kit", description: "Screen & device clean", price: "$19", image: img7 },
];

export const software: Product[] = [
  { id: 33, name: "Mobile App Subscription", description: "Premium features", price: "$9", image: img8 },
  { id: 34, name: "Antivirus App", description: "Protect your phone", price: "$29", image: img9 },
  { id: 35, name: "Gift Card", description: "App store credits", price: "$50", image: img10 },
  { id: 36, name: "VPN App", description: "Secure your connection", price: "$19", image: img11 },
];

export const misc: Product[] = [
  { id: 37, name: "Smart Bulb", description: "Control via phone", price: "$29", image: img12 },
  { id: 38, name: "Stylus Pen", description: "For drawing & note-taking", price: "$19", image: img13 },
  { id: 39, name: "Phone Insurance", description: "Protect your device", price: "$49", image: img14 },
  { id: 40, name: "Smart Plug", description: "Remote control devices", price: "$25", image: img15 },
];
