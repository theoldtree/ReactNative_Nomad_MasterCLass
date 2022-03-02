import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export default function Loader() {
  return (
    <Container>
      <ActivityIndicator color="blue" />
    </Container>
  );
}
