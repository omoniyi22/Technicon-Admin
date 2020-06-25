import React from "react";
import "./check-in.css";
import {
  Container,
  MainSection,
  ADSection,
  ComplaintContainer,
  FormContainer,
  FormContainer2,
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

export default function CheckIn() {
  return (
    <Container>
      <MainSection>
        <Complaint />
      </MainSection>
      <ADSection></ADSection>
    </Container>
  );
}
