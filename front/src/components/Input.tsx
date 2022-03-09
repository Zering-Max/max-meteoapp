import React, { ChangeEvent, SyntheticEvent } from "react";

function Input(props: {
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div
      style={{
        width: 200,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label
        style={{ textAlign: "left", color: "orange", fontWeight: "bold" }}
        htmlFor={props.name}
      >
        {props.name.slice(0, 1).toUpperCase() + props.name.slice(1)}
      </label>
      <input
        style={{ border: "1px solid orange", borderRadius: "8px", padding: 4 }}
        id={props.name}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
