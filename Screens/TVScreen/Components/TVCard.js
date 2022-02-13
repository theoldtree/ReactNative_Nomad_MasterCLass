import React from "react";
import styled from "styled-components/native";
import Poster from "./Poster";

const ListContainer = styled.View``;

const ListTitle = styled.Text`
  font-size: 22px;
  margin: 20px 10px 0px 30px;
  font-weight: 700;
  color: white;
`;

const HScroll = styled.FlatList`
  margin: 20px 0px;
`;

const renderItem = ({ item }) => (
  <Poster
    backdropPath={item.backdrop_path}
    name={item.name}
    vote={item.vote_average}
  />
);

export const TVCard = ({ listTitle, data }) => {
  return (
    <ListContainer>
      <ListTitle>{listTitle}</ListTitle>
      <HScroll
        contentContainerStyle={{ paddingHorizontal: 20 }}
        horizontal
        data={data}
        keyExtractor={(item) => item.id + ""}
        renderItem={renderItem}
      />
    </ListContainer>
  );
};
