import Card from "./Card";
import data from "../db/items.json";
import { useState } from "react";

export default function Main() {
  console.log(data);
  const [soldOutClick, setSoldOutClick] = useState(false);
  return (
    <main>
      <div className="main-button-container">
        <button>ADD</button>
        <button onClick={() => setSoldOutClick((current) => !current)}>SOLD OUT</button>
      </div>
      <div className="main-container">
        {data.items.map((item) => {
          return (
            <Card
              name={item.name}
              key={item.id}
              id={item.id}
              price={item.price}
              image={item.image}
              showSoldOutBtn={soldOutClick}
              soldOut={item.soldOut}
            />
          );
        })}
      </div>
    </main>
  );
}
