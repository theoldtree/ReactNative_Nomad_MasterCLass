import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import { HEIGHT, WIDTH } from "../../styles/constants";
import { ActivityIndicator } from "react-native";
import Slide from "./Components/Slide";
import { TrendScroll } from "./Components/TrendScoll";
import { useQuery } from "react-query";
import { moviesApi } from "../../api";

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const VScroll = styled.FlatList``;

export default function Movie() {
  const { isLoading: nowPlayingLoading, data: nowPlayingData } = useQuery(
    ["movies", "nowPlaying"],
    moviesApi.getPlaying
  );
  const { isLoading: trendingLoading, data: trendingData } = useQuery(
    ["movies", "trending"],
    moviesApi.getTrending
  );

  const loading = nowPlayingLoading || trendingLoading;

  const renderItem = ({ item }) => (
    <TrendScroll overView={item.overview} originalTitle={item.original_title} />
  );

  const listSeprator = styled.View`
    height: 20px;
  `;
  const goDeatil = () =>
    navigation.navigate("Stack", {
      screen: "Detail",
      params: { originalTitle },
    });

  return loading ? (
    <Loader>
      <ActivityIndicator color="blue" />
    </Loader>
  ) : (
    <VScroll
      ListHeaderComponent={
        <>
          <Swiper
            loop
            autoplay={true}
            containerStyle={{ width: WIDTH, height: HEIGHT / 3.1 }}
            showsButtons={false}
          >
            {nowPlayingData.results.map((movie) => (
              <Slide
                id={movie.id}
                backdropPath={movie.backdrop_path}
                posterPath={movie.poster_path}
                voteAverage={movie.vote_average}
                originalTitle={movie.title}
                overview={movie.overview}
                fullData={movie}
              />
            ))}
          </Swiper>
        </>
      }
      keyExtractor={(item) => item.id + ""}
      data={trendingData.results}
      renderItem={renderItem}
      ItemSeparatorComponent={listSeprator}
    />
  );
}
