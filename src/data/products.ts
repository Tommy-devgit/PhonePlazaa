// src/data/products.ts
import img1 from "../assets/productImages/productImage (1).jpg";
import img2 from "../assets/productImages/productImage (2).jpg";
import img3 from "../assets/productImages/productImage (3).jpg";
import img4 from "../assets/productImages/productImage (4).png";
import img5 from "../assets/productImages/productImage (5).jpg";
import img6 from "../assets/productImages/productImage (6).jpg";
import img7 from "../assets/productImages/productImage (7).jpg";
import img8 from "../assets/productImages/productImage (8).jpg";
import img9 from "../assets/productImages/productImage (9).jpg";
import img10 from "../assets/productImages/productImage (10).jpg";
import img11 from "../assets/productImages/productImage (11).jpg";
import img12 from "../assets/productImages/productImage (12).jpeg";
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

import type { Product } from "../types/products";

export const mobilePhones: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    description: "Latest Apple flagship with A17 Pro chip and titanium frame.",
    manufacturedYear: 2025,
    priceETB: 99900,
    condition: "new",
    category: "Mobile Phones & Accessories",
    features: ["A17 Pro chip", "USB-C port", "ProMotion display"],
    image: img1,
  },
  {
    id: "2",
    name: "Samsung Galaxy S23",
    description: "High-end Android phone with top-tier camera.",
    manufacturedYear: 2024,
    priceETB: 89900,
    condition: "new",
    category: "Mobile Phones & Accessories",
    features: ["Snapdragon 8 Gen 2", "120Hz AMOLED display", "5G enabled"],
    image: img2,
  },
  {
    id: "3",
    name: "Google Pixel 8",
    description: "Clean Android experience with powerful AI features.",
    manufacturedYear: 2025,
    priceETB: 79900,
    condition: "new",
    category: "Mobile Phones & Accessories",
    features: ["Tensor G3", "AI photo tools", "7 years of updates"],
    image: img3,
  },
  {
    id: "4",
    name: "OnePlus 12",
    description: "Sleek, fast, and reliable flagship Android device.",
    manufacturedYear: 2024,
    priceETB: 74900,
    condition: "new",
    category: "Mobile Phones & Accessories",
    features: ["Snapdragon 8 Gen 2", "SuperVOOC charging", "Fluid AMOLED"],
    image: img4,
  },
];

export const chargers: Product[] = [
  {
    id: "5",
    name: "Wireless Charger",
    description: "Fast Qi-compatible wireless charger.",
    priceETB: 2800,
    condition: "new",
    category: "Chargers & Power Accessories",
    features: ["15W fast charging", "LED indicator", "USB-C input"],
    image: img5,
  },
  {
    id: "6",
    name: "USB-C Cable",
    description: "Durable and tangle-free 1m cable.",
    priceETB: 1000,
    condition: "new",
    category: "Chargers & Power Accessories",
    features: ["Nylon braided", "Fast charging support"],
    image: img6,
  },
  {
    id: "7",
    name: "Power Bank 10000mAh",
    description: "Portable and compact power bank for all devices.",
    priceETB: 2000,
    condition: "new",
    category: "Chargers & Power Accessories",
    features: ["Dual output", "LED battery indicator", "QuickCharge 3.0"],
    image: img7,
  },
  {
    id: "8",
    name: "Car Charger",
    description: "Dual-port fast charging for on-the-go use.",
    priceETB: 1600,
    condition: "new",
    category: "Chargers & Power Accessories",
    features: ["QC 3.0", "Compact design", "LED power light"],
    image: img8,
  },
];

export const audio: Product[] = [
  {
    id: "9",
    name: "Bluetooth Earbuds",
    description: "Noise-cancelling wireless earbuds.",
    priceETB: 7500,
    condition: "new",
    category: "Audio & Communication Accessories",
    features: ["ANC", "Wireless charging", "Touch control"],
    image: img9,
  },
  {
    id: "10",
    name: "Wired Headphones",
    description: "Comfortable fit with clear sound quality.",
    priceETB: 3400,
    condition: "slightly used",
    category: "Audio & Communication Accessories",
    features: ["3.5mm jack", "Cushioned earcups"],
    image: img10,
  },
  {
    id: "11",
    name: "Bluetooth Speaker",
    description: "Loud, clear, and portable sound.",
    priceETB: 5600,
    condition: "new",
    category: "Audio & Communication Accessories",
    features: ["360° sound", "Water resistant"],
    image: img11,
  },
  {
    id: "12",
    name: "Headphone Adapter",
    description: "3.5mm to USB-C converter.",
    priceETB: 800,
    condition: "new",
    category: "Audio & Communication Accessories",
    features: ["High-quality DAC", "Plug & play"],
    image: img12,
  },
];

export const memory: Product[] = [
  {
    id: "13",
    name: "MicroSD 128GB",
    description: "High-speed memory card for phones & cameras.",
    priceETB: 2500,
    condition: "new",
    category: "Memory & Storage",
    features: ["UHS-I", "Waterproof", "Shockproof"],
    image: img13,
  },
  {
    id: "14",
    name: "USB Flash Drive 64GB",
    description: "Portable USB 3.0 flash storage.",
    priceETB: 1800,
    condition: "new",
    category: "Memory & Storage",
    features: ["Metal body", "Fast read/write"],
    image: img14,
  },
  {
    id: "15",
    name: "External SSD 500GB",
    description: "Compact SSD for backups and data transfer.",
    priceETB: 8500,
    condition: "new",
    category: "Memory & Storage",
    features: ["USB-C", "Shock-resistant", "540MB/s read"],
    image: img15,
  },
  {
    id: "16",
    name: "OTG Drive",
    description: "Dual USB-C and USB-A drive.",
    priceETB: 1900,
    condition: "new",
    category: "Memory & Storage",
    features: ["Plug & play", "64GB capacity"],
    image: img16,
  },
];

export const wearables: Product[] = [
  {
    id: "17",
    name: "Smartwatch",
    description: "Track your health and notifications on your wrist.",
    priceETB: 9800,
    condition: "new",
    category: "Wearables & Smart Devices",
    features: ["Heart rate monitor", "GPS", "Waterproof"],
    image: img17,
  },
  {
    id: "18",
    name: "Fitness Band",
    description: "Lightweight activity tracker with sleep monitor.",
    priceETB: 5200,
    condition: "new",
    category: "Wearables & Smart Devices",
    features: ["Sleep tracking", "Step counter", "Long battery life"],
    image: img18,
  },
  {
    id: "19",
    name: "VR Headset",
    description: "Immersive virtual reality experience.",
    priceETB: 15000,
    condition: "slightly used",
    category: "Wearables & Smart Devices",
    features: ["Wide field of view", "Comfort fit"],
    image: img19,
  },
  {
    id: "20",
    name: "Smart Glasses",
    description: "Augmented reality smart glasses.",
    priceETB: 19500,
    condition: "new",
    category: "Wearables & Smart Devices",
    features: ["Bluetooth", "Voice assistant", "Lightweight"],
    image: img20,
  },
];

export const gaming: Product[] = [
  {
    id: "21",
    name: "Gaming Controller",
    description: "Play mobile games like a pro.",
    priceETB: 2900,
    condition: "new",
    category: "Mobile Gaming & Tech Accessories",
    features: ["Ergonomic design", "Bluetooth 5.0"],
    image: img21,
  },
  {
    id: "22",
    name: "Phone Cooling Fan",
    description: "Keep your phone cool during gaming sessions.",
    priceETB: 2300,
    condition: "new",
    category: "Mobile Gaming & Tech Accessories",
    features: ["RGB lighting", "Quiet fan"],
    image: img22,
  },
  {
    id: "23",
    name: "Selfie Stick",
    description: "Extendable tripod selfie stick.",
    priceETB: 900,
    condition: "new",
    category: "Mobile Gaming & Tech Accessories",
    features: ["Bluetooth remote", "Foldable design"],
    image: img23,
  },
  {
    id: "24",
    name: "Phone Mount",
    description: "Car mount holder with adjustable grip.",
    priceETB: 750,
    condition: "new",
    category: "Mobile Gaming & Tech Accessories",
    features: ["360° rotation", "One-hand operation"],
    image: img24,
  },
];

export const networking: Product[] = [
  {
    id: "25",
    name: "SIM Card",
    description: "Activate your device instantly.",
    priceETB: 400,
    condition: "new",
    category: "Networking & Connectivity",
    features: ["4G ready", "Prepaid"],
    image: img25,
  },
  {
    id: "26",
    name: "Mobile Wi-Fi",
    description: "Portable hotspot for travel.",
    priceETB: 4800,
    condition: "new",
    category: "Networking & Connectivity",
    features: ["4G LTE", "Connect up to 10 devices"],
    image: img1,
  },
  {
    id: "27",
    name: "Portable Router",
    description: "High-speed router for home or office.",
    priceETB: 6200,
    condition: "new",
    category: "Networking & Connectivity",
    features: ["Dual-band", "WPA3 security"],
    image: img2,
  },
  {
    id: "28",
    name: "Network Booster",
    description: "Improve weak signal areas.",
    priceETB: 4500,
    condition: "new",
    category: "Networking & Connectivity",
    features: ["Wide coverage", "Easy installation"],
    image: img3,
  },
];

export const repair: Product[] = [
  {
    id: "29",
    name: "Replacement Screen",
    description: "Original-quality phone screens.",
    priceETB: 8000,
    condition: "new",
    category: "Repair & Maintenance Services / Products",
    features: ["OLED quality", "Scratch resistant"],
    image: img4,
  },
  {
    id: "30",
    name: "Battery Replacement",
    description: "Long-lasting replacement batteries.",
    priceETB: 2800,
    condition: "new",
    category: "Repair & Maintenance Services / Products",
    features: ["High capacity", "Quick install"],
    image: img5,
  },
  {
    id: "31",
    name: "Repair Kit",
    description: "Essential tools for DIY repairs.",
    priceETB: 1900,
    condition: "new",
    category: "Repair & Maintenance Services / Products",
    features: ["Magnetic tips", "Compact case"],
    image: img6,
  },
  {
    id: "32",
    name: "Cleaning Kit",
    description: "Screen and device cleaner.",
    priceETB: 700,
    condition: "new",
    category: "Repair & Maintenance Services / Products",
    features: ["Microfiber cloth", "Safe solution"],
    image: img7,
  },
];

export const software: Product[] = [
  {
    id: "33",
    name: "Mobile App Subscription",
    description: "Unlock premium features for your favorite apps.",
    priceETB: 500,
    condition: "new",
    category: "Software & Digital Products",
    features: ["One-month plan"],
    image: img8,
  },
  {
    id: "34",
    name: "Antivirus App",
    description: "Protect your phone from malware.",
    priceETB: 1800,
    condition: "new",
    category: "Software & Digital Products",
    features: ["Real-time protection"],
    image: img9,
  },
  {
    id: "35",
    name: "Gift Card",
    description: "App Store and Google Play credits.",
    priceETB: 2800,
    condition: "new",
    category: "Software & Digital Products",
    features: ["Instant code delivery"],
    image: img10,
  },
  {
    id: "36",
    name: "VPN App",
    description: "Secure your internet connection.",
    priceETB: 1500,
    condition: "new",
    category: "Software & Digital Products",
    features: ["Unlimited bandwidth", "No logs"],
    image: img11,
  },
];

export const misc: Product[] = [
  {
    id: "37",
    name: "Smart Bulb",
    description: "Control your home lighting with your phone.",
    priceETB: 2300,
    condition: "new",
    category: "Miscellaneous",
    features: ["RGB colors", "App controlled"],
    image: img12,
  },
  {
    id: "38",
    name: "Stylus Pen",
    description: "For drawing and note-taking on touch screens.",
    priceETB: 1200,
    condition: "new",
    category: "Miscellaneous",
    features: ["Pressure sensitive", "Rechargeable"],
    image: img13,
  },
  {
    id: "39",
    name: "Phone Insurance",
    description: "Protect your device from accidental damage.",
    priceETB: 3500,
    condition: "new",
    category: "Miscellaneous",
    features: ["12-month coverage"],
    image: img14,
  },
  {
    id: "40",
    name: "Smart Plug",
    description: "Control your home devices remotely.",
    priceETB: 1600,
    condition: "new",
    category: "Miscellaneous",
    features: ["Wi-Fi enabled", "Energy monitoring"],
    image: img15,
  },
];
