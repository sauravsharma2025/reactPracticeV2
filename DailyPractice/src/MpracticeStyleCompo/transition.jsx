import { useState, useTransition } from "react";

const numbers = [...new Array(20000).keys()];

export default function Appcc() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input type="type" onChange={handleChange} value={query} />
      <div>
        {numbers.map((i, index) =>
          query ? (
            i.toString().startsWith(query) && <p key={index}>{i}</p>
          ) : (
            <p key={index}>{i}</p>
          )
        )}
      </div>
    </div>
  );
}
