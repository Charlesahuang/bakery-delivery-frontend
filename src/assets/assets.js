import basket_icon from "./basket_icon.png";
import logo from "./logo.svg";
import header_img from "./header_img.png";
import search_icon from "./search_icon.png";
import cake from "./cake.png";
import Croissant from "./Croissant.png";
import food_1 from "./Almond_croissant.png";
import food_2 from "./Chocolate_croissant.png";
import food_3 from "./Classic_butter_croissant.png";
import food_4 from "./Ham_and_cheese_croissant.png";
import food_5 from "./Raspberry_croissant.png";
import food_21 from "./Mango_roll_cake.png";
import add_icon_white from "./add_icon_white.png";
import add_icon_green from "./add_icon_green.png";
import remove_icon_red from "./remove_icon_red.png";
import linkedin_icon from "./linkedin_icon.png";
import facebook_icon from "./facebook_icon.png";
import twitter_icon from "./twitter_icon.png";
import cross_icon from "./cross_icon.png";
import selector_icon from "./selector_icon.png";
import rating_starts from "./rating_starts.png";
import profile_icon from "./profile_icon.png";
import bag_icon from "./bag_icon.png";
import logout_icon from "./logout_icon.png";
import parcel_icon from "./parcel_icon.png";

export const assets = {
  logo,
  basket_icon,
  header_img,
  search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
};

export const menu_list = [
  {
    menu_name: "Cake",
    menu_image: cake,
  },
  {
    menu_name: "Croissant",
    menu_image: Croissant,
  },
];

export const food_list = [
  {
    _id: "1",
    name: "Almond croissant",
    image: food_1,
    price: 50,
    description:
      "The croissant is topped with sliced almonds and dusted with powdered sugar",
    category: "Croissant",
  },
  {
    _id: "2",
    name: "Chocolate croissant",
    image: food_2,
    price: 50,
    description:
      "The croissant is flaky, with rich, dark chocolate filling visible from the cut.",
    category: "Croissant",
  },
  {
    _id: "3",
    name: "Classic butter croissant",
    image: food_3,
    price: 50,
    description:
      "The croissant is golden brown with a perfectly flaky texture.",
    category: "Croissant",
  },
  {
    _id: "4",
    name: "Ham and cheese croissant",
    image: food_4,
    price: 50,
    description:
      "The croissant is with melted cheese and slices of ham visible from the side.",
    category: "Croissant",
  },
  {
    _id: "5",
    name: "Raspberry croissant",
    image: food_5,
    price: 50,
    description:
      "The croissant has a sweet and tangy raspberry jam filling visible from the cut.",
    category: "Croissant",
  },
  {
    _id: "21",
    name: "Mango roll cake",
    image: food_21,
    price: 80,
    description:
      "Swiss roll cake with a vibrant mango flavor. The cake is made with a light and fluffy sponge, rolled with a rich, creamy mango",
    category: "Cake",
  },
];
