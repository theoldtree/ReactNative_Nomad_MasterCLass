import React, { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { moviesApi, TVApi } from "../../api";
import Loader from "../MovieScreen/Components/Loader";
import Poster from "../TVScreen/Components/Poster";
import { Ionicons } from "@expo/vector-icons";
import { Linking, Platform, Share, TouchableOpacity } from "react-native";

const Container = styled.ScrollView`
  background-color: #1e272e;
`;

const Header = styled.View`
  align-items: center;
`;

const OverView = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 19px;
`;

const Content = styled.View`
  margin-left: 5%;
  width: 92%;
`;
const Title = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: bold;
`;

const VideoBtn = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;
const BtnText = styled.Text`
  color: white;
  font-weight: 600;
  margin-bottom: 5px;
  margin-left: 10px;
  line-height: 24px;
`;

export default function Detail({
  navigation: { setOptions },
  route: {
    params: { originalTitle, fullData },
  },
}) {
  const isMovie = "original_title" in fullData;
  const { isLoading, data } = useQuery(
    [isMovie ? "moives" : "TV", fullData.id],
    isMovie ? moviesApi.detail : TVApi.detail
  );
  const openYTLink = async (vedioKEY) => {
    const baseURL = `http://m.youtube.com/watch?v=${vedioKEY}`;
    await Linking.openURL(baseURL);
  };
  useEffect(() => {
    setOptions({
      title: fullData.name ? "TV SHOW" : "MOVIE",
    });
  }, []);
  useEffect(() => {
    if (data) {
      setOptions({
        headerRight: () => <ShareButton />,
      });
    }
  }, [data]);
  console.log(data);
  console.log("--------------------------------");
  const name = fullData.name ?? fullData.original_title;
  const ShareMedia = async () => {
    const isAndroid = Platform.OS === "android";
    const hompage = isMovie
      ? `https://www.imdb.com/title/${data.imdb_id}`
      : data.hompage;
    if (isAndroid) {
      await Share.share({
        message: `${fullData.overview}\nCheck it out : ${hompage}`,
        title: fullData.name ?? fullData.original_title,
      });
    } else {
      await Share.share({
        url: hompage,
        title: fullData.name ?? fullData.original_title,
      });
    }
  };
  const ShareButton = () => {
    return (
      <TouchableOpacity onPress={ShareMedia}>
        <Ionicons name="share-outline" color="white" size={24} />
      </TouchableOpacity>
    );
  };
  return (
    <Container>
      <Header>
        <Poster backdropPath={fullData.backdrop_path} />
      </Header>
      <Content>
        <Title>{name}</Title>
        <OverView>{fullData.overview}</OverView>
        {isLoading ? <Loader /> : null}
        {data?.videos?.results?.map((video) => (
          <VideoBtn key={video.key} onPress={openYTLink(video.key)}>
            <Ionicons name="logo-youtube" size={24} color="red" />
            <BtnText>{video.name}</BtnText>
          </VideoBtn>
        ))}
      </Content>
    </Container>
  );
}
