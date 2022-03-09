import React from "react";
import { NavLink } from "react-router-dom";

function AccountLink(props: {
  title: string;
  to: string;
  onClick?: () => void;
}) {
  return (
    <NavLink
      to={props.to}
      onClick={props.onClick}
      style={{
        border: "1px solid black",
        padding: "6px 6px",
        borderRadius: 8,
        cursor: "pointer",
        textDecoration: "none",
        color: "black",
      }}
    >
      {props.title}
    </NavLink>
  );
}

export default AccountLink;
