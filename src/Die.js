import ClassNames from "classnames";
import React from "react";

export default function Die({ isHeld, value, holdDice }) {
  const Buttonstyles = ClassNames(
    "h-12 w-12 shadow-lg rounded-xl flex justify-center items-center cursor-pointer",
    { "bg-green-400": isHeld },
    { "bg-white": !isHeld }
  );
  return (
    <div className={Buttonstyles} onClick={holdDice}>
      <h2 className="text-3xl">{value}</h2>
    </div>
  );
}
