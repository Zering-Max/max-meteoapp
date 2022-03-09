import { useState, useEffect, SyntheticEvent } from "react";
import { Navigate, NavLink } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import {
  PrimaryBox,
  SecondaryBox,
  SubmitButtonContainer,
  Title,
} from "../styles/styledComponents";

function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);

  const submitRegister = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post("register", {
      name,
      email,
      password,
    });
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/login" />;
  } else
    return (
      <Wrapper>
        <PrimaryBox>
          <Title>Please Register</Title>

          <form onSubmit={submitRegister}>
            <SecondaryBox>
              <Input
                name="name"
                type="text"
                onChange={e => setName(e.target.value)}
              />
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
                <SubmitButton title="Register" />
              </SubmitButtonContainer>
            </SecondaryBox>
          </form>
        </PrimaryBox>
      </Wrapper>
    );
}

export default Register;
