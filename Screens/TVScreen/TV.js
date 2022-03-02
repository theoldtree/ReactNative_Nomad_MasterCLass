import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { TVApi } from "../../api";
import Loader from "../MovieScreen/Components/Loader";
import { TVCard } from "./Components/TVCard";

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
    <Loader />
  ) : (
    <VScroll>
      <TVCard
        originalTitle="Today BroadCasting"
        data={TodayBroadcastingData.results}
      />
      <TVCard listTitle="TopRating" data={TopRatedTvShowData.results} />
      <TVCard listTitle="Trending" data={TrendingTVData.results} />
    </VScroll>
  );
}
