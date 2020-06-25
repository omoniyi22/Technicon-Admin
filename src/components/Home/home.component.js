import React from "react";
import "./home.css";
import {
  Container,
  MainSection,
  ADSection,
  ComplaintContainer,
  FormContainer,
  FormContainer2,
  Diagosed,
  DiagosedHeader,
  Num,
  Date,
} from "./styles";
import { CustomInput, SelectInput, RadioInput } from "../General/input";

const Complaint = () => {
  return (
    <ComplaintContainer>
      <FormContainer>
        <CustomInput
          placeholder="What is wrong with your device?"
          label="Complaint"
        />
      </FormContainer>
      <FormContainer2>
        <CustomInput
          placeholder="What is wrong with your device?"
          label="Complaint"
        />
        <CustomInput
          placeholder="What is wrong with your device?"
          label="Complaint"
        />
      </FormContainer2>
      <FormContainer>
        <CustomInput label="Email" placeholder="Your email address" />
      </FormContainer>
      <FormContainer>
        <SelectInput label="Brand" placeholder="Phone brand" />
      </FormContainer>

      <RadioInput label="I need a dispatch rider" />
      <RadioInput label="I will bring my gadget to a technicion office myself" />
    </ComplaintContainer>
  );
};

export default function Home() {
  return (
    <Container>
      <MainSection>
        <Complaint />
      </MainSection>
      <ADSection>
        <Diagosed bg>
          <DiagosedHeader>
            <span>Diagosed Orders</span>
            <span>helo</span>
          </DiagosedHeader>
          <Num>50</Num>
          <Date>12/20/2020</Date>
        </Diagosed>
        <Diagosed></Diagosed>
      </ADSection>
    </Container>
  );
}
