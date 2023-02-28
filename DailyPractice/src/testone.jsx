import { useEffect, useState } from "react";

export const Testone = () => {
  return (
    <>
      <section
        onClick={() => {
          console.log("section");
        }}
      >
        this is sec
        <div onClick={() => console.log("div")}>
          this is div
          <p onClick={() => console.log("para")}>this is para</p>
        </div>
      </section>
    </>
  );
};
