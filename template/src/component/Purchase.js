import data from "../db/items.json";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Purchase() {
  const { id } = useParams()
  const [item, setItem] = useState([]);
  
  useEffect(() => {
    const filterData = data.items.filter((item) => {
      return item.id === Number(id);
    });
    setItem(filterData[0])
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  console.log("purchase : item information is", JSON.stringify(item))
  return (
    <div>
      <h1>{item.name} 구매창입니다</h1>
      <h2>param id 값 : {id}</h2>
    </div>
  );
}
