import React, { Component } from "react";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Item from "./components/Item/Item";
import "./App.scss";
import axios from "axios";

const getItemFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const saveToLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));

class App extends Component {
  state = {
    isModalOpen: false,
    products: getItemFromLocalStorage("products") || [],
    favorite: getItemFromLocalStorage("favorite") || [],
    cart: getItemFromLocalStorage("cart") || [],
  };

  componentDidMount() {
    axios.get("/sneakers.json").then((response) => {
      this.setState({ products: response.data });
    });
  }

  addToCartHandler = (id) => {
    const { isModalOpen, cart } = this.state;
    if (!cart.includes(id)) {
      const cartList = [...cart, id];
      this.setState({ isModalOpen: !isModalOpen, cart: cartList });
      saveToLocalStorage("cart", cartList);
    }
  };

  addToFavoriteHandler = (id) => {
    const { favorite } = this.state;
    let favoriteList;
    if (favorite.includes(id)) {
      favoriteList = favorite.filter((el) => el !== id);
      this.setState({ favorite: favoriteList });
    } else {
      favoriteList = [...favorite, id];
      this.setState({ favorite: favoriteList });
    }
    saveToLocalStorage("favorite", favoriteList);
    console.log(this.state.favorite);
  };

  closeModal = (e) => {
    if (e.target.dataset.cancel) {
      const { cart } = this.state;
      cart.pop();
      saveToLocalStorage("cart", cart);
      this.setState({ isModalOpen: false, cart });
    } else {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { isModalOpen, favorite } = this.state;
    const products = this.state.products.map((i) => (
      <Item
        key={i.id}
        {...i}
        favorite={favorite}
        modalHandler={this.addToCartHandler}
        favoriteHandler={this.addToFavoriteHandler}
      />
    ));
    console.log(products);
    return (
      <>
        <ul className={"items-container"}>{products}</ul>
        {isModalOpen && (
          <Modal
            closeModal={this.closeModal}
            cancel={true}
            header={"Добавить товар в корзину?"}
            actions={
              <>
                <Button
                  backgroundColor={"#2a88e0"}
                  text={"Да"}
                  clickHandler={this.closeModal}
                />
                <Button
                  backgroundColor={"#2a88e0"}
                  text={"Отменить"}
                  clickHandler={this.closeModal}
                  cancel={true}
                />
              </>
            }
          />
        )}
      </>
    );
  }
}

export default App;
