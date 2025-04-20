import React from "react";
import SellProduct from "../../Componants/HomePage/SallProduct/SellProduct";
import Brands from "../../Componants/HomePage/Brands/Brands";
import BestProduct from "../../Componants/HomePage/BestProduct/BestProduct";
import OurCustomers from "../../Componants/HomePage/OurCustomers/OurCustomers";
import TopProduct from "../../Componants/HomePage/TopProduct/TopProduct";
import Delivery from "../../Componants/HomePage/Delivery/Delivery";
export default function Home() {
  return (
    <>
      <SellProduct />
      <Delivery/>
      <Brands />
      <TopProduct />
      <BestProduct />
      <OurCustomers />
    </>
  );
}
