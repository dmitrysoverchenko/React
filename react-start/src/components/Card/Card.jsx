import React from "react";
import "./Card.scss";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";

const Card = ({ card, buyCan, trashCan }) => {
  const { title, price, color, imgUrl, id } = card;
  const { favorite } = useSelector((state) => state.favorite);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (!cart.find((e) => e.id === id)) {
      dispatch(actions.addItemToCart(card));
    }
  };

  return (
    <li className="card">
      <h3 className="card__title">{title}</h3>
      <img
        src={imgUrl}
        className={"card__image"}
        alt={title}
        width={200}
        height={240}
      />
      <ul className="card__characters">
        <li>id: {id}</li>
        <li>color: {color}</li>
        <li>price: {price}</li>
      </ul>
      {buyCan && (
        <button
          className={"card__button"}
          data-add={true}
          onClick={(e) => addToCartHandler(e, card)}
        >
          Add to cart
        </button>
      )}
      <Icon
        filled={favorite.map((e) => e.id).includes(id)}
        className={"favorite"}
        card={card}
      />
      {trashCan && (
        <button
          className={"card__button"}
          onClick={() => dispatch(actions.removeItemFromCart(card))}
        >
          Delete from cart
        </button>
      )}
    </li>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  modalHandler: PropTypes.func,
  favoriteHandler: PropTypes.func,
  favorite: PropTypes.arrayOf(PropTypes.object),
  deleteHandler: PropTypes.func,
};

Card.defaultProp = {
  trashCan: false,
};

export default Card;
