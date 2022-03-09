import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import Wrapper from "../components/Wrapper";
import {
  PrimaryBox,
  SecondaryBox,
  SubmitButtonContainer,
  Title,
} from "../styles/styledComponents";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);

  const submitLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post("login", {
      email,
      password,
    });
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/account" />;
  } else
    return (
      <Wrapper>
        <PrimaryBox>
          <Title>
            {" "}
            Welcome To Smart Weather ! <br /> Please Login
          </Title>
          <form onSubmit={submitLogin}>
            <SecondaryBox>
              <Input
                name="email"
                type="email"
                onChange={e => setEmail(e.target.value)}
              />
              <Input
                name="password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
              <SubmitButtonContainer>
                <NavLink
                  style={{ fontSize: "0.8rem", marginBottom: "1rem" }}
                  to="/register"
                >
                  You don't have an account ? Please go to register
                </NavLink>
                <SubmitButton title="Login" />
              </SubmitButtonContainer>
            </SecondaryBox>
          </form>
        </PrimaryBox>
      </Wrapper>
    );
}

export default Login;
