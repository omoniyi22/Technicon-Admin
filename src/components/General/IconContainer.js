import React from "react";
import styled from "styled-components";

export default function IconContainer({ className }) {
  return (
    <Container>
      <i className="fas fa-bell" />
      <Text>Notifications</Text>
    </Container>
  );
}

const Container = styled.div`
  // border: 1px solid orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  margin: 0.3rem 0;
  font-size: 15px;
`;
