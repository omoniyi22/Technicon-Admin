import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { mySVG } from "../assets/svg/svg";
import Header from "../components/Header/header";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import "./layout.css";
const ListText = {
  home: "Manage Dashboard",
  completed: "Completed Transactions",
  aborted: "Aborted Transactions",
  history: "Transaction History",
  logout: "Sign out",
};

const liStyles = {
  cursor: "pointer",
  display: "flex",
  // border: "1px solid red",
  padding: 8,
  marginTop: 8,
  marginBottom: 8,
  justifyContent: "center",
  alignItems: "center",
};

const checkinStyles = {
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
};

const CheckInItems = ({ name = "Check in Items" }) => {
  return (
    <Button type="default" className="check-in-button">
      <i
        style={{ paddingRight: 10, fontSize: 20 }}
        className="fas fa-plus-circle"
      />
      <span>{name}</span>
    </Button>
  );
};
const Li = ({ name, icon = "fas fa-home" }) => (
  <li className="custom-li" style={{ ...liStyles }}>
    <i className={`custom-icon ${icon}`} />
    <span className="icon-text">{name}</span>
  </li>
);

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <Header />
        <Body>
          <Aside>
            <Logo />
            <Nav>
              <Li name={ListText.home} />
              <Li name={ListText.completed} icon="fas fa-check-square" />
              <Li name={ListText.aborted} icon="fas fa-ban" />
              <Li name={ListText.history} icon="far fa-clock" />
              <li style={{ ...checkinStyles }}>
                <CheckInItems />
              </li>
              <Li name={ListText.logout} icon="fas fa-sign-out-alt" />
            </Nav>
          </Aside>
          <Section>{children}</Section>
        </Body>
      </Container>
    );
  }
}

const Nav = styled.nav`
  margin: 30px 0;
`;
const Logo = styled.div`
  background: url(${mySVG.logo});
  background-repeat: no-repeat;
  height: 50px;
  background-position: center;
  background-size: contain;
`;
const Container = styled.div`
  background: #f9f9f9;
  min-height: 100vh;
`;
const Body = styled.div`
  padding: 0.2rem 5rem;
  flex-direction: row;
  display: flex;
`;

const Aside = styled.div`
  // border: 1px solid orange;
  width: 30%;
  min-height: 50vh;
  background: #fdfdfd;
  -webkit-box-shadow: 0 3px 2px -2px rgba(200, 200, 200, 0.4);
  -moz-box-shadow: 0 3px 2px -2px rgba(200, 200, 200, 0.4);
  box-shadow: 0 3px 2px -2px rgba(200, 200, 200, 0.4);
  padding: 1.2rem 0rem;
`;

const Section = styled.section`
  border: 1px solid orange;
  width: 70%;
`;
