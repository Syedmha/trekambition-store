import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "1",
    productName: "Hiking backpack 30L - NH Arpenaz 100 Black",
    brand: "QUECHUA",
    image: "https://contents.mediadecathlon.com/p1805377/afe444e3f147fb634e0a02167dc631ce/p1805377.jpg?format=auto&quality=70&f=768x0",
    price: 1399,
    discountPercent: 25,
    categoryName: "Backpacks",
    rating: "4.6",
    isOutOfStock: false,
    features: { Capacity: "30 Litres", Pockets: "6", Material: "Synthetic", Waterproof: "No, water repellent" },
    description: "Our hiker-designers eco-designed this 30L Arpenaz NH100 backpack for occasional hiking in flatlands, woodlands or on the coast. Looking for a backpack for your adventures in the great outdoors? Our Arpenaz NH100 30L is respectful of the environment, comfortable, accessorised & great for hikes involving small elevation gains"
  },
  {
    _id: "2",
    productName: "Junior Hiking Backpack 40L - MH500 - Blue",
    brand: "QUECHUA",
    image: "https://contents.mediadecathlon.com/p2039849/f524a9a91ad376f7fec7622bfe949e5b/p2039849.jpg?format=auto&quality=70&f=768x0",
    price: 3499,
    discountPercent: 40,
    categoryName: "Backpacks",
    rating: "3.2",
    isOutOfStock: false,
    features: { Capacity: "40 Litres", Pockets: "6", Material: "Synthetic", Waterproof: "No" },
    description: "Our hiking designers have developed this 40 litre backpack for day-long hikes in dry weather on challenging trails Designed for the young hiker, the fit is adapted to their body shape and is suitable for several days. A partner you can also take to summer camp!"
  },
  {
    _id: "3",
    productName: "Hiking Bag 20 Litre NH100 - Khaki",
    brand: "QUECHUA",
    image: "https://contents.mediadecathlon.com/p2039828/eef9067c2df74cbf930ff20d59c2932c/p2039828.jpg?format=auto&quality=70&f=768x0",
    price: 999,
    discountPercent: 15,
    categoryName: "Backpacks",
    rating: "4.7",
    isOutOfStock: false,
    features: { Capacity: "20 Litres", Pockets: "4", Material: "Synthetic", Waterproof: "No, water repellent" },
    description: "Our hiker-designers eco-designed this 30L Arpenaz NH100 backpack for occasional hiking in flatlands, woodlands or on the coast. Looking for a backpack for your adventures in the great outdoors? Our Arpenaz NH100 30L is respectful of the environment, comfortable, accessorised & great for hikes involving small elevation gains"
  },
  {
    _id: "4",
    productName: "Travel Backpack 50L - Forclaz 50",
    brand: "FORCLAZ",
    image: "https://contents.mediadecathlon.com/p2237844/14f1b978eb402063c641e186daf92f36/p2237844.jpg?format=auto&quality=70&f=768x0",
    price: 4999,
    discountPercent: 50,
    categoryName: "Backpacks",
    rating: "2.8",
    isOutOfStock: false,
    features: { Capacity: "50 Litres", Pockets: "7", Material: "Recycled Polyester", Waterproof: "No" },
    description: "We have designed this backpack for all those first outdoor adventures, whether it be mountain trekking or travelling around the world. A simple and functional bag with its pockets and front access, practical for occasional outings that require 50 L volume."
  },
  {
    _id: "5",
    productName: "Men’s Snow Hiking Jacket - SH100 X-WARM",
    brand: "QUECHUA",
    image: "https://contents.mediadecathlon.com/p1935812/de07cd2c021042e9dda9f6211ebbdd52/p1935812.jpg?format=auto&quality=70&f=768x0",
    price: 3999,
    discountPercent: 50,
    categoryName: "Clothing",
    rating: "3.5",
    isOutOfStock: false,
    features: { Pockets: "3", Material: "Synthetic ", Waterproof: "Yes, snow repellent", Warmth: "-10°C" },
    description: "Want to hike in snow and cold weather? Our design teams created this warm and waterproof jacket, which is comfortable down to -10°C. Perfect for hikes in the cold and snow: adjustable hood, warm pockets and wide flap behind the zip for an extra 3°C warmth. Eco-designed, waterproof and comfortable down to -10°C"
  },
  {
    _id: "6",
    productName: "Men's Warm Water-Repellent Hiking Trousers - SH100 ULTRA-WAR",
    brand: "QUECHUA",
    image: "https://contents.mediadecathlon.com/p1927253/6b29fecf94c04d253bb4769b635fb377/p1927253.jpg?format=auto&quality=70&f=768x0",
    price: 1599,
    discountPercent: 30,
    categoryName: "Clothing",
    rating: "4.5",
    isOutOfStock: false,
    features: { Pockets: "4", Material: "Synthetic ", Waterproof: "No, water repellent", Warmth: "-18°C" },
    description: "Perfect trousers for hiking in extremely cold weather. Extremely warm fleece inner and water-repellent outer fabric offer great comfort. These ultra warm, eco-designed and water-repellent trousers will provide heat and protection during your hikes in very cold weather. Very comfortable to wear with warm pockets and integrated belt."
  },
  {
    _id: "7",
    productName: "Men's Running T-shirt Run Dry - Prussian Blue",
    brand: "KALENJI",
    image: "https://contents.mediadecathlon.com/p1613536/af92b0ff8462a67fa66e5db4d9019905/p1613536.jpg?format=auto&quality=70&f=768x0",
    price: 799,
    discountPercent: 25,
    categoryName: "Clothing",
    rating: "2.3",
    isOutOfStock: false,
    features: { Pockets: "0", Material: "Recycled Polyester", Waterproof: "No" },
    description: "Our team of designers put together this men's breathable running T-shirt to keep you dry when running in hot weather. The fabric of this men's running T-shirt, made of recycled polyester, absorbs and wicks away perspiration in order to minimise any feeling of dampness. It dries more quickly than a cotton T-shirt."
  },
  {
    _id: "8",
    productName: "Men's Mountain Trekking Durable Shorts MT500",
    brand: "FORCLAZ",
    image: "https://contents.mediadecathlon.com/p2137351/348eebdd745c6f2531cf465fe8dd91a1/p2137351.jpg?format=auto&quality=70&f=768x0",
    price: 1999,
    discountPercent: 15,
    categoryName: "Clothing",
    rating: "1.7",
    isOutOfStock: false,
    features: { Pockets: "4", Material: "Synthetic ", Waterproof: "No, water repellent" },
    description: "Our team of passionate mountain trekkers has designed these shorts so you can trek in total comfort in good weather. The perfect multi-pocket trekking shorts: the best compromise between durability and light weight."
  },
  {
    _id: "9",
    productName: "Men Waterproof Trekking Boots 100 Grey",
    brand: "FORCLAZ",
    image: "https://contents.mediadecathlon.com/p1692773/33a46f2e8c97968fe17f38c64ef39067/p1692773.jpg?format=auto&quality=70&f=768x0",
    price: 8399,
    discountPercent: 25,
    categoryName: "Shoes",
    rating: "4.7",
    isOutOfStock: false,
    features: { Material: "Suede ", Waterproof: "Yes", Height: "High Shoes" },
    description: "These boots allow you to evolve on easy trails with good support and walking comfort. Walking enthusiasts will love these comfortable and lightweight boots, designed to guarantee excellent foot motion. Ideal for long walks and easy trails. "
  },
  {
    _id: "10",
    productName: "Women's Hiking Warm and Waterproof Boots - SH100 WARM - MID",
    brand: "QUECHUA",
    image: "https://contents.mediadecathlon.com/p1770260/0bc3c33a5059522cf5bd340e2a267f93/p1770260.jpg?format=auto&quality=70&f=768x0",
    price: 3499,
    discountPercent: 15,
    categoryName: "Shoes",
    rating: "2.5",
    isOutOfStock: false,
    features: { Material: "Synthetic ", Waterproof: "Yes, snow proof", Height: "Mid Shoes" },
    description: "Want to take your first steps on snowy trails? Our engineers developed these shoes for occasional hikes. Ideal on packed snow. Warm and waterproof, developed with a snowcontact rubber sole to ensure better grip, progress with great comfort on your hikes in packed snow."
  },
  {
    _id: "11",
    productName: "Men's Snow Hiking Warm and Waterproof Boots - SH100 ULTRA-WARM",
    brand: "QUECHUA",
    image: "https://contents.mediadecathlon.com/p1647816/2479e9814c12758f5184356b0913cb33/p1647816.jpg?format=auto&quality=70&f=768x0",
    price: 3499,
    discountPercent: 40,
    categoryName: "Shoes",
    rating: "4.5",
    isOutOfStock: false,
    features: { Material: "Synthetic ", Waterproof: "Yes", Height: "Mid Shoes" },
    description: "Are you looking to have a go at walking on snowy paths? Our engineers developed these shoes for occasional hikes. Ideal for walking on packed snow Warm and waterproof, developed with a snow contact rubber sole to ensure better grip, progress with confidence on your hikes in packed snow."
  },
  {
    _id: "12",
    productName: "Men's Snow Hiking Shoes WARM & WATERPROOF SH100 U-WARM High - Black",
    brand: "QUECHUA",
    image: "https://contents.mediadecathlon.com/p2047848/bbe4079153bb839d56635025bb357a70/p2047848.jpg?format=auto&quality=70&f=768x0",
    price: 3999,
    discountPercent: 10,
    categoryName: "Shoes",
    rating: "3.2",
    isOutOfStock: false,
    features: { Material: "Synthetic ", Waterproof: "Yes,snow repellent", Height: "High Shoes" },
    description: "Want to explore snow-covered trails? Our design team created these boots for occasional hikes on groomed snow. Warm and waterproof, developed with a snowcontact sole to guarantee a good grip, you can go hiking in comfort and style on any type of snow thanks to its high upper."
  },
  {
    _id: "13",
    productName: "Camping Tent MH100 - 3-Person",
    brand: "QUECHUA",
    image: "https://contents.mediadecathlon.com/p1832129/99920adbebd52ea23169fb8a649b3d01/p1832129.jpg?format=auto&quality=70&f=768x0",
    price: 4999,
    discountPercent: 30,
    categoryName: "CampingTools",
    rating: "3.4",
    isOutOfStock: false,
    features: { Material: "Polyester ", Waterproof: "Yes", Capacity: "3 Persons" },
    description: "First night camping? Our designers eco-designed this 3-person tent that is simple and easy to pitch. A responsible and accessible tent. Thanks to its free-standing dome structure, it can be moved to a better location after it has been deployed."
  },
  {
    _id: "14",
    productName: "Camping Folding Armchair - Blue",
    brand: "QUECHUA",
    image: "https://contents.mediadecathlon.com/p1749361/96ca9266b4a34d7c1099b146f89eb230/p1749361.jpg?format=auto&quality=70&f=768x0",
    price: 1999,
    discountPercent: 15,
    categoryName: "CampingTools",
    rating: "2.6",
    isOutOfStock: false,
    features: { Material: "Synthetic ", Height: "High Seat", Type: "Arm chair" },
    description: "Our camper-designers designed this Basic folding armchair for sitting comfortably. We haven't forgotten the essential cup holder! Our motivation? Design a camping chair that is both comfortable and compact. An essential for those who love camping!"
  },
  {
    _id: "15",
    productName: "Trekking Sleeping Bag MT500 15°C - Polyester",
    brand: "FORCLAZ",
    image: "https://contents.mediadecathlon.com/p1798306/7a435fb0501816c5be9a419297ba4060/p1798306.jpg?format=auto&quality=70&f=768x0",
    price: 3299,
    discountPercent: 30,
    categoryName: "CampingTools",
    rating: "4.4",
    isOutOfStock: false,
    features: { Material: "Synthetic ", Waterproof: "Yes", Warmth: "10°C" },
    description: "Our designers, who are all trekking enthusiasts, designed this sleeping bag to sleep comfortably in a bivouac at temperatures above or equal to 15°C. It is ultra compact and lightweight - perfect for summer use. The 2 side zips with double sliders provide optimal ventilation. This sleeping bag can be twinned."
  },
  {
    _id: "16",
    productName: "FOLDING CAMPING TABLE - 4 STOOLS - 4 TO 6 PEOPLE",
    brand: "QUECHUA",
    image: "https://contents.mediadecathlon.com/p1757596/5f6afde636ebc761b055f38fb88e1db0/p1757596.jpg?format=auto&quality=70&f=768x0",
    price: 6999,
    discountPercent: 40,
    categoryName: "CampingTools",
    rating: "4.5",
    isOutOfStock: false,
    features: { Height: "70cm ", Type: "Adjustable", Capacity: "6 Persons" },
    description: "Our camper-designers designed this folding dining table for up to 6 people at a campsite. It comes with 4 folding stools. Our motivation? To offer you a complete and compact solution for 4 people. The 4 stools are integrated into the table to take up less space. Can accommodate up to 6 people."
  },
  {
    _id: "17",
    productName: "Camping Mug Stainless Steel MH150 (0.4L)",
    brand: "QUECHUA",
    image: "https://contents.mediadecathlon.com/p1487849/b6234acfc5497d5ea47c1f309e333567/p1487849.jpg?format=auto&quality=70&f=768x0",
    price: 499,
    discountPercent: 10,
    categoryName: "Accessories",
    rating: "4.7",
    isOutOfStock: false,
    features: { Volume: "400ml ", Material: "Stainless Steel" },
    description: "A must-have for hiking, trekking or camping, our designers have developed this large-capacity stainless-steel mug. In ultra-resistant, lightweight stainless steel. 2 handles, graduated. 0.4 litre. Beware of burning with hot liquids."
  },
  {
    _id: "18",
    productName: "CAMPING LAMP - BL200 RECHARGEABLE - 200 LUMENS",
    brand: "QUECHUA",
    image: "https://contents.mediadecathlon.com/p1713855/1986b9db4678102b20b5c0e03118c497/p1713855.jpg?format=auto&quality=70&f=768x0",
    price: 2799,
    discountPercent: 20,
    categoryName: "Accessories",
    rating: "1.7",
    isOutOfStock: false,
    features: { Battery: "7h ", Waterproof: "Yes", Rechargeable: "Yes" },
    description: "Our camper-designers designed this BL200 lamp to comfortably provide enough light for four people.Can be used outdoors, under tents, on camp-sites and bivouacs. Our motivation? To design your ideal camping lamp for shared lighting in the countryside. Very powerful (200 lumens), it guarantees you long battery life and durability, even in the rain."
  },
  {
    _id: "19",
    productName: "Camping Cookset Stainless Steel MH100 2 Person (1.6L)",
    brand: "QUECHUA",
    image: "https://contents.mediadecathlon.com/p1314231/fbb260f623143993dab63ade5aa80245/p1314231.jpg?format=auto&quality=70&f=1024x0",
    price: 1299,
    discountPercent: 0,
    categoryName: "Accessories",
    rating: "3.3",
    isOutOfStock: false,
    features: { Capacity: "2 persons ", Material: "Stainless Steel" },
    description: "Our passionate designers have developed a simple, comprehensive and clever cookset to enable you to cook and eat outside. In durable and easy to maintain stainless steel. Patented folding handle that locks the cook set for transport. Bowls and cutlery included. For 2 people."
  },
  {
    _id: "20",
    productName: "Adult Windproof Mountain Trekking Gloves - TREK 900 Grey",
    brand: "FORCLAZ",
    image: "https://contents.mediadecathlon.com/p1897368/e0eeab9f8ed9f71ed5e63f0bff80f0c4/p1897368.jpg?format=auto&quality=70&f=768x0",
    price: 1699,
    discountPercent: 10,
    categoryName: "Accessories",
    rating: "4.3",
    isOutOfStock: false,
    features: { Waterproof: "No, water repellent", Material: "Synthetic", Warmth: "-4°C" },
    description: "Our team of mountain trekking enthusiasts developed these gloves to protect you on your treks in wintry and windy conditions. These warm, durable and windproof gloves are touchscreen compatible and have a leash so you can remove them without risking losing them."
  },

];
