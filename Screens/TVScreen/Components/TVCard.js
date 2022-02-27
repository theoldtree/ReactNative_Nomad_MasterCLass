import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
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

const renderItem = ({ item }) => {
  console.log(item);
  const content = item.name ?? item.original_title;
  return (
    <Poster
      backdropPath={item.backdrop_path}
      originalTitle={content}
      vote={item.vote_average}
      fullData={item}
    />
  );
};

export const TVCard = ({ originalTitle, data }) => {
  return (
    <ListContainer>
      <ListTitle>{originalTitle}</ListTitle>
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
