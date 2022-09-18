import Card from "./Card";
import data from "../db/items.json";

export default function Main() {
  console.log(data);
  return (
    <main>
      <div className="main-button-container">
        <button>ADD</button>
        <button>SOLD OUT</button>
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
            />
          );
        })}
      </div>
    </main>
  );
}
