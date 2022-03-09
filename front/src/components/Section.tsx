import React from "react";

function Section(props: {
  children: React.ReactNode;
  width: string;
  borderRight?: string;
}) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: props.width,
        borderRight: props.borderRight,
      }}
    >
      {props.children}
    </section>
  );
}

export default Section;
