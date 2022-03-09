import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AccountLink from "./AccountLink";

function WrapperAccount(props: { children: React.ReactNode }) {
  const [user, setUser] = useState({ name: "" });
  const [redirect, setRedirect] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("user");
        setUser(data);
      } catch (error) {
        setRedirect(true);
      }
    })();
  }, []);
  if (redirect) {
    return <Navigate to="/login" />;
  }

  const logout = async () => {
    await axios.post("logout");
  };

  return (
    <>
      <header
        style={{
          padding: "0 8px 8px 8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "orange",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: "60%" }}>
          <h2>Smart Weather</h2>
          <span
            style={{ fontSize: "0.8rem", fontStyle: "italic", marginLeft: 8 }}
          >
            For the smart people...
          </span>
        </div>
        <div
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {user ? (
            <>
              <span style={{ fontWeight: "bold" }}>Welcome {user.name} </span>
              <AccountLink
                to={
                  window.location.pathname === "/account"
                    ? "/weatherslist"
                    : "/account"
                }
                title={
                  window.location.pathname === "/account"
                    ? "My Weathers List"
                    : "Return To Search"
                }
              />
              <AccountLink onClick={logout} to="/login" title={"Logout"} />
            </>
          ) : null}
        </div>
      </header>
      <main
        style={{
          width: "90%",
          margin: "auto",
          padding: "8px 0 0 0",
          display: "flex",
        }}
      >
        {props.children}
      </main>
    </>
  );
}

export default WrapperAccount;
