import React, { useState } from "react";
import s from '../css/alert.css';


export const Alert = ({ variant }) => {
  const [open, setOpen] = useState(true);
  if (open)
    return (
      <div
        className="alert-container"
        style={{
          background: variant.mainColor,
          border: "0.1rem solid " + variant.secondaryColor,
        }}
      >
        <div
          className="symbol-container"
          style={{ background: variant.secondaryColor }}
        >
          <span className="material-symbols-outlined symbol">{variant.symbol}</span>{" "}
        </div>
        <div className="description-container">
          <span className="description-title">{variant.title}:</span>
          <span className="description-text">{variant.text}</span>
        </div>
        <a className="symbol-close-link" onClick={() => setOpen(false)}>
          <span className="material-symbols-outlined ">close</span>
        </a>
      </div>
    );
};