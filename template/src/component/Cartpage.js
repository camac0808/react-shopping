import useFetch from "../hooks/useFetch";
import Cart from "./Cart";

export default function Cartpage() {
  const items = useFetch("http://localhost:3001/items");

  // filter된 item을 다시 map으로 펼쳐서 변수에 할당해준다.
  const filterItem = items.filter((item) => item.cart === true);

  console.log(filterItem);
  return (
    <div className='cart-page'>
      {filterItem.map((item) => {
        return (
          <Cart
            name={item.name}
            price={item.price}
            image={item.image}
            detail={item.detail}
            key={item.id}
          />
        );
      })}
    </div>
  );
}
