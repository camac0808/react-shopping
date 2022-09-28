import Card from "./Card";
import { useState } from "react";
import useFetch from './../hooks/useFetch';

export default function Main() {
  const [soldOutClick, setSoldOutClick] = useState(false);

  // json-server로 api호출 (json-server --watch ../db/items.json --port 3001)
  const items = useFetch("http://localhost:3001/items")
  console.log(items);
  
  return (
    <main>
      <div className="main-button-container">
        <button className="btn btn-outline-primary">ADD</button>
        <button
          className="btn btn-outline-primary"
          onClick={() => setSoldOutClick((current) => !current)}
        >
          SOLD OUT
        </button>
      </div>
      <div className="main-container">
        {items.map((item) => {
          return (
            <Card
              item={item}
              name={item.name}
              key={item.id}
              id={item.id}
              price={item.price}
              image={item.image}
              showSoldOutBtn={soldOutClick}
              soldOut={item.soldOut}
              cart={item.cart}
            />
          );
        })}
      </div>
    </main>
  );
}
