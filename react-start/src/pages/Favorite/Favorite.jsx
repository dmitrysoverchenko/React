import React from 'react';
import Card from "../../components/Card/Card";


const Favorite = ({ favorite, favoriteHandler, cartHandler}) => {

  return (
      <>
        {favorite.length
            ? <ul className="cards-container">
              {favorite.map(card => <Card key={card.id}
                                          card={card}
                                          favorite={favorite}
                                          modalHandler={cartHandler}
                                          favoriteHandler={favoriteHandler}
                                          addToCart={true}
              />)
              }
            </ul>
            : <h3>Your favorite list are empty</h3>
        }
      </>
  );
}

export default Favorite;