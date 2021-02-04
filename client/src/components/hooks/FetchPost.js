// export  function FetchPost(url,data){
// const requestOptions = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(data),
// };
//     const response = await fetch(url, requestOptions);
//     const data = await response.json();
//     return data;
// };

import { useState, useEffect } from "react";

export default function FetchPost(url, payload) {
  const [data, setData] = useState({ loading: true });
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  };
  async function getData() {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return data;
}
