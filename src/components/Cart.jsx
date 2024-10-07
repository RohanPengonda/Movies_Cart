import data from "../api/mdata.json";
import MoviesData from "./MoviesData";
import "./Cart.css";
const Cart = () => {
  return (
    <ul className="grid grid-three--cols">
      {data.map((curEle) => (
        <MoviesData key={curEle.id} curElem={curEle} />
      ))}
    </ul>
  );
};
export default Cart;
