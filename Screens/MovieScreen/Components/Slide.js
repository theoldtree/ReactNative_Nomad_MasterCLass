import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { HEIGHT, WIDTH } from "../../../styles/constants";
import { makeImagePath } from "../../../util/utils";
import { useNavigation } from "@react-navigation/native";

const BgImg = styled.Image`
  width: ${WIDTH}px;
  height: 100%;
  position: absolute;
  flex: 1;
`;
const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 18px;
`;
const Poster = styled.Image`
  width: 28%;
  height: 72%;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Column = styled.View`
  width: 50%;
  margin-left: 5%;
`;

const OverView = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;
const Votes = styled(OverView)`
  font-size: 16px;
  margin-top: 12px;
`;

const Container = styled.TouchableOpacity``;

export default function Slide({
  id,
  backdropPath,
  posterPath,
  voteAverage,
  originalTitle,
  overview,
}) {
  const navigation = useNavigation();
  const goDeatil = () => navigation.navigate("Stack", { screen: "Detail" });

  return (
    <Container onPress={goDeatil}>
      <View key={id}>
        <BgImg source={{ uri: makeImagePath(backdropPath) }} blurRadius={5} />
        <Wrapper>
          <Poster source={{ uri: makeImagePath(posterPath) }} />
          <Column>
            <Title>{originalTitle}</Title>
            <OverView>{overview.slice(0, 150)} ...</OverView>
            {voteAverage > 0 ? <Votes>⭐️{voteAverage}/10</Votes> : null}
          </Column>
        </Wrapper>
      </View>
    </Container>
  );
}
