import React from "react";
import styled from "styled-components";
import Layout from "../../layout/layout";
import CheckIn from "../Checkin";
import Home from "../Home/home.component";

export default class Dashboard extends React.Component {
  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}
