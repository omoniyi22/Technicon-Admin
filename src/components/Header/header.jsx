import React from "react";
import styled from "styled-components";
import "./header.css";
import { SearchInput } from "../General/searchInput";
import IconContainer from "../General/IconContainer";
import CustomAvatar from "../General/avatar";
import { SearchButton } from "../General/buttons";

function Header() {
  return (
    <Container>
      <div className="nav-first-section">
        <div className="nav-avatar">
          <CustomAvatar />
        </div>
        <div className="nav-share">
          <SearchButton />
        </div>
      </div>

      <div className="search-section">
        <SearchInput />
      </div>
      <div className="notification-section">
        <IconContainer />
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  // border: 1px solid orange;
  height: 70px;
  border-top: 5px solid #2d9cdb;
  background: #fdfdfd;
  -webkit-box-shadow: 0 3px 2px -2px rgba(200, 200, 200, 0.4);
  -moz-box-shadow: 0 3px 2px -2px rgba(200, 200, 200, 0.4);
  box-shadow: 0 3px 2px -2px rgba(200, 200, 200, 0.4);
  display: flex;
  align-items: center;
  padding: 0 5rem;
  // justify-content: space-between;
`;
