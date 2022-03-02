import React, { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { moviesApi, TVApi } from "../../api";
import { BLACK_COLOR } from "../../styles/constants";
import Poster from "../TVScreen/Components/Poster";

const Container = styled.ScrollView`
  background-color: #1e272e;
`;

const Header = styled.View`
  align-items: center;
`;

const OverView = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 19px;
`;

const Content = styled.View`
  margin-left: 5%;
  width: 92%;
`;
const Title = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: bold;
`;

export default function Detail({
  navigation: { setOptions },
  route: {
    params: { originalTitle, fullData },
  },
}) {
  const isMovie = "original_title" in fullData;
  const { isLoading, data } = useQuery(
    [isMovie ? "moives" : "TV", fullData.id],
    isMovie ? moviesApi.detail : TVApi.detail
  );
  console.log(fullData);
  useEffect(() => {
    setOptions({
      title: fullData.name ? "TV SHOW" : "MOVIE",
    });
  }, []);
  console.log(data);
  const name = fullData.name ?? fullData.original_title;
  const ShareButton = () => {};
  return (
    <Container>
      <Header>
        <Poster backdropPath={fullData.backdrop_path} />
      </Header>
      <Content>
        <Title>{name}</Title>
        <OverView>{fullData.overview}</OverView>
      </Content>
    </Container>
  );
}
