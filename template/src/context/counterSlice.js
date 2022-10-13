///////////////////// Context API 사용해보기 /////////////////////

// import { createContext, useState } from "react";

// // context box를 만든다
// export const ContextBox = createContext({
//   badgeCount: 0,
//   cartCount: () => {},
// });

// export default function CountProvider({ children }) {
//   const [badgeCount, setBadgeCount] = useState(0);
//   const [items, setItems] = useState([]);
//   // const items = useFetch("http://localhost:3001/items");

//   async function cartCount() {
//     let count = 0;
//     const response = await fetch(`http://localhost:3001/items`);
//     const data = await response.json();
//     setItems(data);
//     items.forEach((item) => {
//       if (item.cart === true) {
//         count += 1;
//       }
//     });
//     setBadgeCount(count);
//     console.log("CartCount called");
//   }

//   return (
//     <ContextBox.Provider value={{ badgeCount, cartCount }}>{children}</ContextBox.Provider>
//   );
// }

///////////////////// redux toolkit 사용해보기 /////////////////////

import { createSlice } from "@reduxjs/toolkit";

// 새로고침시 count가 0으로 초기화되는 현상 막기 위해 initialState 자체에 비동기 통신으로 가져온 cart의 갯수를 넣어버린다


export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    badgeCount(state, action) {
      // state.count = action.payload;
      state.count = action.payload;
    },
  },
});

console.log(counterSlice);

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
