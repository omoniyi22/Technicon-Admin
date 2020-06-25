import React from "react";
import { Input, Select, Radio } from "antd";
import styled from "styled-components";
import "./input.css";
const { Option } = Select;

export const RadioInput = ({ label }) => (
  <InputContainer>
    <Radio>{label}</Radio>
  </InputContainer>
);

export const CustomInput = ({
  label = "example",
  onChangeText,
  placeholder = "Basic usage",
}) => {
  return (
    <InputContainer>
      <Span>{label}</Span>
      <Input placeholder={placeholder} className="custom-input" />
    </InputContainer>
  );
};

export const SelectInput = ({
  placeholder = "Iphone X",
  label = "example",
}) => {
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <InputContainer>
      <Span style={{ display: "block" }}>{label}</Span>
      <Select
        className="custom-input"
        showSearch
        style={{
          width: "100%",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
        }}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
    </InputContainer>
  );
};
const InputContainer = styled.div`
  //   border: 1px solid red;
`;

const Span = styled.span`
  display: block;
  font-size: 13px;
  color: #a1a1a1;
  font-weight: bold;
  margin: 0.35rem 0;
`;
