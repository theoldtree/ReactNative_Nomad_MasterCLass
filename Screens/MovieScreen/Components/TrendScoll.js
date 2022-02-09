import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { makeImagePath } from "../../../util/utils";

const Title = styled.Text`
    color: black;
    font-weight: 600;
    font-size: 18px;
`

export const TrendScroll = ({id,backdropPath,overView,originalTitle,movie}) => {
    return(
        <View key={id} style={{marginBottom: 10, marginTop: 10}}>
            <Title>{originalTitle}</Title>
            <Title>{overView}</Title>
        </View>
    );
}