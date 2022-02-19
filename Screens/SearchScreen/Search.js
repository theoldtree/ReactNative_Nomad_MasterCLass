import React, { useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { moviesApi, TVApi } from "../../api";
import { TVCard } from "../TVScreen/Components/TVCard";

const Container = styled.ScrollView``;

const SearchBar = styled.TextInput`
  background-color: white;
  padding: 10px 15px;
  border-radius: 15px;
  width: 90%;
  margin: 10px auto;
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export default function Search() {
  const [search, setSearch] = useState("");
  const {
    isLoading: searchMovieLoading,
    refetch: searchMovies,
    data: searchMovieData,
  } = useQuery(["searchMovies", search], moviesApi.search, {
    enabled: false,
  });
  const {
    isLoading: searchTVLoading,
    refetch: searchTV,
    data: searchTVData,
  } = useQuery(["searchTV", search], TVApi.search, {
    enabled: false,
  });
  const onTextChange = (text) => setSearch(text);
  const onSubmint = () => {
    if (search === "") return;
    Alert.alert("search");
    searchMovies();
    searchTV();
  };
  return (
    <Container>
      <SearchBar
        placeholder="Search for Movie or TV Show"
        placeholderTextColor="grey"
        returnKeyLabel="search"
        onChangeText={onTextChange}
        onSubmitEditing={onSubmint}
      />
      {searchMovieLoading || searchTVLoading ? (
        <Loader>
          <ActivityIndicator />
        </Loader>
      ) : null}
      {searchTVData ? (
        <TVCard listTitle="Search TV Results" data={searchTVData.results} />
      ) : null}
      {searchMovieData ? (
        <TVCard
          listTitle="Search Movie Results"
          data={searchMovieData.results}
        />
      ) : null}
    </Container>
  );
}
