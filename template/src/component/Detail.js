import { useParams } from "react-router-dom";
import data from "../db/items.json";
import { useState, useEffect } from "react";

export default function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState("");

  useEffect(() => {
    const filterData = data.items.filter((item) => {
      return item.id === Number(id);
    });
    setDetail(filterData[0].detail);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1 className="detail">{detail}</h1>
      <h2>param id 값 : {id}</h2>
    </div>
  );
}
