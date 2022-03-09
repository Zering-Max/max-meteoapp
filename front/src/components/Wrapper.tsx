import React from "react";

function Wrapper(props: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "url('https://static2.mclcm.net/iod/images/v2/69/citytheque/localite_102_3/1200x630_100_300_000000x30x0.jpg')",
        backgroundSize: "cover",
      }}
    >
      {props.children}
    </div>
  );
}

export default Wrapper;
