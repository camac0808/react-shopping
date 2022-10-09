import { createContext, useState } from "react";

// context box를 만든다
export const CountContext = createContext({
  badgeCount: 0,
  cartCount: () => {},
});

export default function CountProvider({ children }) {
  const [badgeCount, setBadgeCount] = useState(0);
  const [items, setItems] = useState([]);
  // const items = useFetch("http://localhost:3001/items");

  async function cartCount() {
    let count = 0;
    const response = await fetch(`http://localhost:3001/items`);
    const data = await response.json();
    setItems(data);
    items.forEach((item) => {
      if (item.cart === true) {
        count += 1;
      }
    });
    setBadgeCount(count);
    console.log("CartCount called");
  }

  return (
    <CountContext.Provider value={{ badgeCount, cartCount }}>{children}</CountContext.Provider>
  );
}
