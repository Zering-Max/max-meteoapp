import React from "react";

function MeteoCard(props: {
  city: string;
  image: string;
  description: string;
  temp_min: number;
  temp_max: number;
  onClick?: () => void;
  title: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: 300,
      }}
    >
      <h3> {props.city ?? "Your location search"}</h3>
      <img src={props.image ?? ""} alt="image" />
      <p>{props.description ?? "ceci est une description"}</p>
      <div
        style={{
          width: 400,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: "blue", fontWeight: "bold" }}>
          Temp Min : {props.temp_min ?? 15}°C{" "}
        </span>
        <span style={{ color: "red", fontWeight: "bold" }}>
          Temp Max : {props.temp_max ?? 18}°C{" "}
        </span>
      </div>
      <button
        style={{
          border: "2px solid orange",
          background: "white",
          padding: "0.5rem",
          borderRadius: 8,
          cursor: "pointer",
          color: "orange",
        }}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  );
}

export default MeteoCard;
