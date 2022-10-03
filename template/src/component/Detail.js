import { useParams } from "react-router-dom";
// import dummy from "../db/items.json";
import { useState, useEffect } from "react";
import useFetch from "./../hooks/useFetch";

export default function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState("");

  // Dummy로 할때는 해당 param id값과 item id값을 비교해서 데이터를 가져와야 한다

  // useEffect(() => {
  //   const filterItem = dummy.items.filter((item) => {
  //     return item.id === Number(id);
  //   });
  //   setDetail(filterItem[0].detail);
  // }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const items = useFetch(`http://localhost:3001/items/${id}`);

  useEffect(() => {
    setDetails(items.detail);
  }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1 className="detail">{details}</h1>
      <h2>param id 값 : {id}</h2>
    </div>
  );
}
