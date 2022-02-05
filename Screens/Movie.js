import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native'
import Swiper from 'react-native-web-swiper';
import { HEIGHT, WIDTH } from '../styles/constants';
import { ActivityIndicator } from 'react-native';
import { makeImagePath } from '../utils';

const API_KEY = "be0f3f0ec9232076fd93640e71f6c33b"
const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`

const Container = styled.ScrollView`
    background-color: ${props => props.theme.mainBgColor};
`
const View = styled.View`
    flex: 1;
`

const Text = styled.Text`
    color: black;
`

const Loader = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const BgImg = styled.Image`
    flex:1;
`

export default function Movie() {
    const [loading, setLoading] = useState(true);
    const [nowPlayingMovies,setNowPlayingMovies] = useState([]);
    const getNowPlaying = async() => {
        const {results} = await (
            await fetch(URL)
        ).json();
        setNowPlayingMovies(results);
        setLoading(false);
        console.log(results);
    }
    useEffect(()=>{
        getNowPlaying();
    },[])
    return loading ? (
        <Loader>
            <ActivityIndicator color="blue"/>
        </Loader>
    ) : (
        <Container>
            <Swiper
                loop
                containerStyle={{ width: WIDTH, height: HEIGHT / 4 }}
                timeout={3.5}
            >
                {nowPlayingMovies.map(movie=><View key={movie.id}>
                    <BgImg source={{uri:makeImagePath(movie.backdrop_path)}}/>
                </View>)}
            </Swiper>
        </Container>
    )
}
