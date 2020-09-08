export const getOrder = async () => {
  const url = `http://localhost:3001/api/public/getOrders`;
  const resp = await fetch(url, {
    method: "GET",
  });
  const { orders } = await resp.json();

  return orders;
};

export const getOrderOne = async (id) => {
  const url = `http://localhost:3001/api/public/getOrder/${id}`;
  const resp = await fetch(url, {
    method: "GET",
  });
  const { order } = await resp.json();

  return order;
};
