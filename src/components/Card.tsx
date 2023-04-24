import React, { useEffect } from "react";
import { ICard } from "../utils/interface";

const Card = ({ name, description, link, image }: ICard) => {
  useEffect(() => {
    const input = document.querySelector("input") as HTMLInputElement
    console.log(input.value);
    
  },[])

  return <div>
    <input type="text" />
  </div>;
};

export default Card;
