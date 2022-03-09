import React from "react";

function SubmitButton(props: { title: string }) {
  return (
    <button
      type="submit"
      style={{
        border: "2px solid orange",
        width: 200,
        background: "white",
        padding: "8px 0 8px 0",
        borderRadius: 8,
        cursor: "pointer",
        color: "orange",
        fontWeight: "bold",
      }}
    >
      {props.title}
    </button>
  );
}

export default SubmitButton;
