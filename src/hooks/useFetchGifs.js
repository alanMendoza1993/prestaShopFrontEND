import { useState, useEffect } from "react";
import { getOrder } from "../helpers/getOrder";
export const useFetchGifs = () => {
  const [state, setState] = useState({ data: [], loading: true });
  useEffect(() => {
    getOrder().then((orders) => setState({ data: orders, loading: false }));
  }, []);
  return state;
};
