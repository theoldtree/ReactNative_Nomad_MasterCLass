import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { makeImagePath } from "../../../util/utils";

const Wrapper = styled.View``;

const TVPoster = styled.Image`
  height: 200px;
  width: 350px;
  margin: 0px 10px;
`;

const VView = styled.View`
  align-items: center;
`;

const Name = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 18px;
`;

export default function Poster({ backdropPath, originalTitle, vote }) {
  const navigation = useNavigation();
  const goDetail = () => {
    navigation.navigate("Stack", {
      screen: "Detail",
      params: { originalTitle },
    });
  };
  return backdropPath === null ? null : (
    <TouchableOpacity onPress={goDetail}>
      <Wrapper>
        <TVPoster source={{ uri: makeImagePath(backdropPath) }} />
        <VView>
          <Name>{originalTitle}</Name>
          {vote > 0 ? <Name>⭐️ {vote} / 10</Name> : null}
        </VView>
      </Wrapper>
    </TouchableOpacity>
  );
}
