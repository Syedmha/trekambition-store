import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: "1",
    categoryName: "Backpacks",
    image: "/assets/images/cat-backpacks-img.svg",
    description:
      "Backpacks from Top brands made available for you!",
  },
  {
    _id: "2",
    categoryName: "Clothing",
    image: '/assets/images/cat-clothing-img.svg',
    description:
      "High quality clothing for a comfortable trek",
  },
  {
    _id: "3",
    categoryName: "Shoes",
    image: '/assets/images/cat-shoes-img.svg',
    description:
      "Shoes are the most essential part of your trek",
  },
  {
    _id: "4",
    categoryName: "Camping Tools",
    image: '/assets/images/cat-camping-img.svg',
    description:
      "Durabable and innovative tools for a great camping experience",
  },
  {
    _id: "5",
    categoryName: "Accessories",
    image: '/assets/images/cat-accessories-img.svg',
    description:
      "Make your trek complete with these important accessories!",
  },
];
