import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifGridItem } from "./GifGridItem";

export const OrderGrid = () => {
  const { data: orders, loading } = useFetchGifs();
  console.log("ordenes" + orders);
  return (
    <>
      <h3>{loading && <p>Loading</p>}</h3>
      <div className="card-grid">
        {orders.map((order) => {
          return <GifGridItem key={order.id} {...order} />;
        })}
      </div>
    </>
  );
};
