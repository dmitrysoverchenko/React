import React from "react";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import Subtitle from "../../components/Subtitle/Subtitle";

const Favorite = () => {
  const { favorite } = useSelector((state) => state.favorite);

  return (
    <>
      {favorite.length ? (
        <ul className={"cards-container"}>
          {favorite.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </ul>
      ) : (
        <Subtitle text={"Your favorites list is empty"} />
      )}
    </>
  );
};

export default Favorite;
