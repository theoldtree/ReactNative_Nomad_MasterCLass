import React from "react";
import styled from "styled-components/native";

const Container = styled.ScrollView``;

const SearchBar = styled.TextInput`
  background-color: white;
`;

export default function Search() {
  return (
    <Container>
      <SearchBar placeholder="  Search for Movie or TV Show" />
    </Container>
  );
}
