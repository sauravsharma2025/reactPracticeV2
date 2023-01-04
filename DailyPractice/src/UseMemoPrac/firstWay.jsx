import { useEffect } from "react";
import { useState } from "react";

export const FirstWay = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filtertedData, setFilteredData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
        setFilteredData(data);
      });
  }, []);
  useEffect(
    () => {
      const result = products.filter((item) => {
        const { title, description, category } = item;
        if (checkForMatch(title, search)) return true;
        if (checkForMatch(description, search)) return true;
        if (checkForMatch(category, search)) return true;
        return false;
      });
      setFilteredData(result);
    },
    [search],
    [products]
  );
  console.log("Re-RENDER");
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ol>
        {filtertedData.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ol>
    </>
  );
};

function checkForMatch(str, char) {
  if (!str) return false;
  str = str.toLowerCase();
  char = char.toLowerCase();
  return str.match(char);
}
