import React from "react";
import { ActivityIndicator } from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { TVApi } from "../../api";
import Poster from "./Components/Poster";
import { TVCard } from "./Components/TVCard";

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const VScroll = styled.ScrollView``;

export default function TV() {
  const { isLoading: TodayBroadCastingLoading, data: TodayBroadcastingData } =
    useQuery(["TV", "todayBroadcasting"], TVApi.getTodayOnAir);
  const { isLoading: TopRatingTvShowLoading, data: TopRatedTvShowData } =
    useQuery(["TV", "topRatingTvShow"], TVApi.getTopRatedTvShow);
  const { isLoading: TrendingTVLoading, data: TrendingTVData } = useQuery(
    ["TV", "trending"],
    TVApi.getTrendingTV
  );

  const loading =
    TodayBroadCastingLoading || TopRatingTvShowLoading || TrendingTVLoading;

  return loading ? (
    <Loader>
      <ActivityIndicator color="#0000ff" />
    </Loader>
  ) : (
    <VScroll>
      <TVCard
        listTitle="Today BroadCasting"
        data={TodayBroadcastingData.results}
      />
      <TVCard listTitle="TopRating" data={TopRatedTvShowData.results} />
      <TVCard listTitle="Trending" data={TrendingTVData.results} />
    </VScroll>
  );
}
