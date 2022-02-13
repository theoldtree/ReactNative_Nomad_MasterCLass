import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { makeImagePath } from "../../../util/utils";

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 18px;
`;
const OverView = styled(Title)`
  color: rgba(255, 255, 255, 0.5);
`;

export const TrendScroll = ({
  id,
  backdropPath,
  overView,
  originalTitle,
  movie,
}) => {
  return (
    <View key={id} style={{ marginBottom: 10, marginTop: 10, marginLeft: 20 }}>
      <Title>{originalTitle}</Title>
      <OverView>{overView}</OverView>
    </View>
  );
};
