import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [items, setItems] = useState([]);

  // async await 함수는 프로미스 객체를 반환 하므로 부수효과 함수가 될 수 없다
  useEffect(() => {
    // json-server로 더미db 연결해서 간단한 api만듬
    async function getItems() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, [url]);
  // data를 가져와서 setItems안에 넣어준 후 items를 리턴한다
  return items;
}
