import React,{useState} from "react";

function Item({ name, category }) {
  const[isincart,setisincart]=useState(false)
    const[isnotincart,setisnotincart]=useState(true)
  function handleAddToCart(){
    setisincart(!isincart)
    setisnotincart(!isnotincart)
  }
  return (
    <li className={isincart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{isnotincart?"Add to cart":"Remove from cart"}</button>
    </li>
  );
}

export default Item;
