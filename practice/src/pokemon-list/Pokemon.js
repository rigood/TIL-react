import React from "react";

export default function Pokemon({ pokemon }) {
  return (
    <>
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </>
  );
}
