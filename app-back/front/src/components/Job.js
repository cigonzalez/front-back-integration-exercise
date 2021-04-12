import React from "react";

export const Job = (props) => {
  const state = {
    "offer": props.offer,
  };

  const renderOffer = () => {
    return (
      <div>
        <h2>{state.offer.name}</h2>
        <h3>{state.offer.company}</h3>
        <h4>{state.offer.salary}</h4>
        <h5>{state.offer.city}</h5>
      </div>
    );
  }

  return (
    <div>
      {renderOffer()}
    </div>
  )
};
