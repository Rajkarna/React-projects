import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, removeFromBag } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const bagItems = useSelector((state) => state.bag);
  const itemExist = bagItems.indexOf(item.id) >= 0;

  const dispatch = useDispatch();

  const handleAddTobag = () => {
    dispatch(addToBag(item.id));
  };

  const removeItemBag = () => {
    dispatch(removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      

      {itemExist ? (
        <button className="btn btn-danger" onClick={removeItemBag}>
          Remove
        </button>
      ) : (
        <button className="btn btn-success" onClick={handleAddTobag}>
          Add to bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
