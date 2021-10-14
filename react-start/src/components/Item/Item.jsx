import React, { Component } from "react";
import "./Item.scss";
import PropTypes from "prop-types";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }
  render() {
    const {
      title,
      price,
      color,
      imgUrl,
      id,
      modalHandler,
      favoriteHandler,
      favorite,
    } = this.props;

    return (
      <>
        <li className="item">
          <h3 className="item__title">{title}</h3>
          <img
            src={imgUrl}
            className={"item__image"}
            alt={title}
            width={200}
            height={240}
          />
          <ul className="item__characters">
            <li>id: {id}</li>
            <li>color: {color}</li>
            <li>price: {price}</li>
          </ul>
          <div className={"item__buttons"}>
            <button
              className={"item__button item-button__buy"}
              onClick={() => modalHandler(id)}
            >
              Добавить в корзину
            </button>
            <button
              className={"item__button item-button__fav"}
              onClick={() => favoriteHandler(id)}
            >
              Добавить в избранное
            </button>
          </div>
        </li>
      </>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  imgUrl: PropTypes.string,
  id: PropTypes.string,
  modalHandler: PropTypes.func,
  favoriteHandler: PropTypes.func,
  favorite: PropTypes.arrayOf(PropTypes.string),
};

export default Item;
