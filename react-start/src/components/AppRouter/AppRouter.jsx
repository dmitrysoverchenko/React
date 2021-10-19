import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Cards from "../../pages/Cards/Cards";
import Favorite from "../../pages/Favorite/Favorite";
import Cart from "../../pages/Cart/Cart";

const AppRouter = ({cartHandler, closeModal, isOpenModal, setCards, cards, favorite, favoriteHandler, cart}) => (
    <Switch>
      <Route exact path={"/"}>
        <Cards setCards={setCards}
               cards={cards}
               cartHandler={cartHandler}
               favorite={favorite}
               favoriteHandler={favoriteHandler}/>
      </Route>
      <Route path={"/favorite"}>
        <Favorite  favorite={favorite}
                   favoriteHandler={favoriteHandler}
                   cartHandler={cartHandler}
        />
      </Route>
      <Route path={"/cart"}>
        <Cart cart={cart}
              favorite={favorite}
              favoriteHandler={favoriteHandler}
              cartHandler={cartHandler}
              isOpenModal={isOpenModal}
              closeModal={closeModal}
        />
      </Route>
    </Switch>
);

export default AppRouter;