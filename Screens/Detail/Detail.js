import React, { useEffect } from "react";
import styled from "styled-components/native";
import { BLACK_COLOR } from "../../styles/constants";

const Container = styled.ScrollView`
  background-color: #1e272e;
`;

const Content = styled.Text``;

export default function Detail({
  navigation: { setOptions },
  route: {
    params: { originalTitle },
  },
}) {
  useEffect(() => {
    setOptions({
      title: originalTitle,
    });
  }, []);
  console.log(originalTitle);
  return (
    <Container>
      <Content>Detail</Content>
    </Container>
  );
}
