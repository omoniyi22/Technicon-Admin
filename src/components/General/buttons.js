import React from "react";
import { Button } from "antd";
import styled from "styled-components";

export const AuthButton = ({ name = "Login" }) => (
  <Container>
    <Button className="auth-button" shape="round" block>
      {name}
    </Button>
  </Container>
);

export const SearchButton = ({ name = "Share" }) => {
  return (
    <Button
      type="primary"
      style={{ borderRadius: 30, paddingRight: 25, paddingLeft: 25 }}
    >
      {name}
    </Button>
  );
};

const Container = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
`;
