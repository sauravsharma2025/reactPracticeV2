import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchQueryParam = () => {
  const [searchQuery] = useSearchParams();
  const queryParams = () => {
    const params = {};
    searchQuery.forEach((key, value) => {
      params[key] = value;
    });
    return params;
  };
  console.log("SK@", queryParams());
  return (
    <>
      <p>
        I am searching params{searchQuery.get("name")} {searchQuery.get("city")}
      </p>
    </>
  );
};
