import React from "react";
import "./Card.scss";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";

const Card = ({
  modalHandler,
  favoriteHandler,
  favorite,
  card,
  trashCan,
  addToCart,
}) => {
  const { title, price, color, imgUrl, id } = card;

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
      {addToCart && (
        <button
          className={"card__button"}
          data-add={true}
          onClick={(e) => modalHandler(e, card)}
        >
          Add to cart
        </button>
      )}

      <Icon
        filled={favorite.map((e) => e.id).includes(id)}
        className={"favorite"}
        favoriteHandler={favoriteHandler}
        card={card}
      />
      {trashCan && (
        <button
          className={"card__button"}
          onClick={(e) => modalHandler(e, card)}
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
