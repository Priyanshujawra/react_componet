import React from "react";
import Person from "./Person";
function listrendring() {
  const items = [
    { id: 1, name: "bruce" },
    { id: 2, name: "clark" },
    { id: 3, name: "Bom" }
  ];

  const namelist = items.map(item => <Person key={item.name} person={item} />);
  return <div>{namelist}</div>;
}
export default listrendring;
