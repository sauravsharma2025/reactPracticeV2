import { useEffect } from "react";
import { useState } from "react";

const FetchApiFunction = () => {
  const [products, setFetch] = useState(false);
  const [search, setSeach] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => {
        console.log("SK@", data);
        data.json();
      })
      .then((data) => {
        console.log("@ps", data);
        setFetch(data);
      });
  }, []);
  console.log(products);
  return (
    <>
      {/* <div>
        <h1>my products</h1>

        {products.map((item) => {
          return (
            <div>
              <li key={item.id}></li>
              <li>{item.description}</li>
              <li>{item.title}</li>
            </div>
          );
        })}
      </div> */}
    </>
  );
};
export default FetchApiFunction;
