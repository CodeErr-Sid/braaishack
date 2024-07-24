import React from 'react'
import Header from '../../components/About-header/Header'
import PlaceOrder from '../../components/PlaceOrder/PlaceOrder';
import Menucards from '../../components/Menucards/Menucards';
import { assets } from '../../assets/assets';

const Place_Order = () => {
  const sections = [
  {
    title: "Starters",
    cards: [
      {
        img: assets.starters1,
        productname: "samosa",
        productprice: "$49",
      },
      {
        img: assets.starters2,
        productname: "pakora",
        productprice: "$39",
      },
      {
        img: assets.starters3,
        productname: "spring roll",
        productprice: "$29",
      },
      {
        img: assets.starters4,
        productname: "chicken wings",
        productprice: "$59",
      },
    ],
  },
  {
    title: "Braai Menu",
    cards: [
      {
        img: assets.braai1,
        productname: "samosa",
        productprice: "$49",
      },
      {
        img: assets.braai2,
        productname: "pakora",
        productprice: "$39",
      },
      {
        img: assets.braai3,
        productname: "spring roll",
        productprice: "$29",
      },
      {
        img: assets.braai4,
        productname: "chicken wings",
        productprice: "$59",
      },
      {
        img: assets.braai5,
        productname: "chicken wings",
        productprice: "$59",
      },
      {
        img: assets.braai6,
        productname: "chicken wings",
        productprice: "$59",
      },
      {
        img: assets.braai7,
        productname: "chicken wings",
        productprice: "$59",
      },
    ],
  },
  {
    title: "Kids Braai Menu",
    cards: [
      {
        img: assets.kids1,
        productname: "samosa",
        productprice: "$49",
      },
      {
        img: assets.kids2,
        productname: "pakora",
        productprice: "$39",
      },
      {
        img: assets.kids3,
        productname: "spring roll",
        productprice: "$29",
      },
    ],
  },
  {
    title: "Braai Sides",
    cards: [
      {
        img: assets.sides1,
        productname: "samosa",
        productprice: "$49",
      },
      {
        img: assets.sides2,
        productname: "pakora",
        productprice: "$39",
      },
      {
        img: assets.sides3,
        productname: "spring roll",
        productprice: "$29",
      },
      {
        img: assets.sides4,
        productname: "chicken wings",
        productprice: "$59",
      },
      {
        img: assets.sides5,
        productname: "chicken wings",
        productprice: "$59",
      },
      {
        img: assets.sides6,
        productname: "chicken wings",
        productprice: "$59",
      },
      {
        img: assets.sides7,
        productname: "chicken wings",
        productprice: "$59",
      },
      {
        img: assets.sides8,
        productname: "chicken wings",
        productprice: "$59",
      },
    ],
  },
  {
    title: "Desserts",
    cards: [
      {
        img: assets.sides9,
        productname: "samosa",
        productprice: "$49",
      },
      {
        img: assets.sides10,
        productname: "pakora",
        productprice: "$39",
      },
      {
        img: assets.sides11,
        productname: "spring roll",
        productprice: "$29",
      },
      {
        img: assets.sides12,
        productname: "chicken wings",
        productprice: "$59",
      },
    ],
  },
];
  return (
    <>
    <Header header_title={'ONLINE ORDER'} header_btn={'HOME/MENU/PRODUCT'} />
    <PlaceOrder/>
    <Menucards />
    </>
  )
}

export default Place_Order;