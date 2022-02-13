import React from "react";
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

export default function Poster({ backdropPath, name, vote }) {
  return backdropPath === null ? null : (
    <Wrapper>
      <TVPoster source={{ uri: makeImagePath(backdropPath) }} />
      <VView>
        <Name>{name}</Name>
        {vote > 0 ? <Name>⭐️ {vote} / 10</Name> : null}
      </VView>
    </Wrapper>
  );
}
