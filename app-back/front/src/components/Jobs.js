import React, { useState, useEffect } from "react";
import { Job } from "./Job";
import { CreateOffer } from "./CreateOffer";

export const JobsList = () => {
  const [state, setState] = useState({'offers': []});
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    const url = "/offers";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((offers) => {
        setState({ offers });
      });
  }, [update]);

  return (
    <div>
      <CreateOffer action={() => setUpdate(update + 1)} />
      {state.offers.map((e, i) => (
        <Job key={i} offer={e} />
      ))}
    </div>
  );
};
