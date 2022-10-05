// import data from "../db/items.json";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Purchase() {
  const { id } = useParams();
  const item = useFetch(`http://localhost:3001/items/${id}`);

  console.log(item);
  // useEffect(() => {
  //   // dummy 사용시
  //   // const filterData = data.items.filter((item) => {
  //   //   return item.id === Number(id);
  //   // });
  //   // setItem(filterData[0])
  // }, [item]);
  return (
    <div className="purchase-container">
      <h1>{item.name} 구매창입니다</h1>
      <h2>{item.price}</h2>
      <img src={item.image} alt={item.name}></img>
      <h2>param id 값 : {id}</h2>
    </div>
  );
}
