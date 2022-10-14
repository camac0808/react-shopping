import { useParams } from "react-router-dom";
// import dummy from "../db/items.json";
import useFetch from "./../hooks/useFetch";

export default function Detail() {
  const { id } = useParams();
  const item = useFetch(`https://my-json-server.typicode.com/camac0808/react-shopping/items/${id}`);

  // Dummy로 할때는 해당 param id값과 item id값을 비교해서 데이터를 가져와야 한다

  // useEffect(() => {
  //   const filterItem = dummy.items.filter((item) => {
  //     return item.id === Number(id);
  //   });
  //   setDetail(filterItem[0].detail);
  // }, [id]); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div>
      <h2>param id 값 : {id}</h2>
      <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name}></img>
      <h2>{item.name}</h2>
      <h2>{item.price}</h2>
    </div>
  );
}
