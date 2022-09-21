import Card from "./Card";
import { useState, useEffect } from "react";

export default function Main() {
  const [items, setItems] = useState([]);
  const [soldOutClick, setSoldOutClick] = useState(false);

  const getItems = async () => {
    try {
      const response = await fetch("http://localhost:3001/items");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

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
