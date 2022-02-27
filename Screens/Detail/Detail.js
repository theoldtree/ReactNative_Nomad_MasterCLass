import React, { useEffect } from "react";
import styled from "styled-components/native";
import { BLACK_COLOR } from "../../styles/constants";
import Poster from "../TVScreen/Components/Poster";

const Container = styled.ScrollView`
  background-color: #1e272e;
`;

const Content = styled.Text``;

const Header = styled.View`
  align-items: center;
`;

export default function Detail({
  navigation: { setOptions },
  route: {
    params: { originalTitle, fullData },
  },
}) {
  useEffect(() => {
    setOptions({
      title: originalTitle,
    });
    console.log(fullData);
  }, []);
  console.log(originalTitle);
  return (
    <Container>
      <Header>
        <Poster backdropPath={fullData.backdrop_path} />
      </Header>
    </Container>
  );
}
