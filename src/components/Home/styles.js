import styled from "styled-components";

export const Container = styled.div`
  //   border: 1px solid red;
  display: flex;
`;

export const MainSection = styled.div`
  //   border: 1px solid green;
  padding: 0rem 3.5rem;
  flex: 3;
`;

export const ADSection = styled.div`
  //   border: 1px solid red;
  flex: 2;
`;

export const ComplaintContainer = styled.div`
  // border: 1px solid yellow;
  background: #fff;
  width: 370px;
  padding: 0.9rem 1.8rem;
`;

export const FormContainer = styled.div`
  margin: 10px 0;
`;

export const FormContainer2 = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

export const Diagosed = styled.div`
  border: 1px solid #2d9cdb;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 19px 0px;
  padding: 10px 20px;
  height: 197px;
  background-color: ${(props) => (props.bg ? "#F4FAFD" : "none")};
`;

export const DiagosedHeader = styled.span`
  //   border: 1px solid orange;
  justify-content: space-between;
  display: flex;
  margin: 15px 0;
`;

export const Num = styled.span`
  color: #2d9cdb;
  font-weight: bold;
  font-size: 2rem;
`;

export const Date = styled.div`
  //   border: 1px solid green;
  margin-top: 50%;
  color: #2d9cdb;
  display: flex;
  float: right;
`;
