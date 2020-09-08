import React, { useState, useEffect } from "react";
import { getOrderOne } from "../helpers/getOrder";
import NumberFormat from "react-number-format";
export const GifGridItem = ({ id }) => {
  var orderFrist = null;
  useEffect(() => {
    getOrderOne(id).then((ord) => {
      setOrder(ord);
      orderFrist = ord;
    });
  }, []);
  const [order, setOrder] = useState(orderFrist);
  console.log("orden: " + JSON.stringify(order));
  return (
    <div className="card animate__animated animate__fadeIn animate__delay-2s">
      <h3 className="title">
        {order && <p>{order.reference}</p>}{" "}
        {order && (
          <NumberFormat
            value={order.total_paid}
            className="number"
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        )}
      </h3>

      {order && (
        <ol>
          {order.associations.order_rows.map((product) => (
            <li>{product.product_name}</li>
          ))}
        </ol>
      )}
    </div>
  );
};
