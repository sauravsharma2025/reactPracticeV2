import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const SecondWay = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);
  const filterResult = useMemo(() => {
    const result = products.filter((item) => {
      const { title, description, category } = item;
      if (checkForMatch(title, search)) return true;
      if (checkForMatch(description, search)) return true;
      if (checkForMatch(category, search)) return true;
      return false;
    });
    return result;
  });
  console.log("SK@");
  return (
    <>
      <p>Search Your Query</p>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ol>
        {filterResult.map((item) => {
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
