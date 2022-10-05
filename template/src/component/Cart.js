export default function Cart({ name, price, image, detail }) {

  console.log(name, price, image, detail);
  return (
    <div className='cart-container'>
      <h1>장바구니</h1>
      <h2>{name}</h2>
      <h2>{price}</h2>
      <img src={`${image}`} alt={name}></img>
      <h2>{detail}</h2>
    </div>
  );
}
