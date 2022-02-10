import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native'
import Swiper from 'react-native-swiper'
import { HEIGHT, WIDTH } from '../../styles/constants';
import { ActivityIndicator } from 'react-native';
import Slide from './Components/Slide';
import { TrendScroll } from './Components/TrendScoll';

const API_KEY = "be0f3f0ec9232076fd93640e71f6c33b"
const PLAYING_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=KR`
const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`

const Container = styled.ScrollView`
`

const Loader = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: white;
`
const VScroll = styled.FlatList`
`

export default function Movie() {
    const [loading, setLoading] = useState(true);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [upComingPlayingMovies, setUpComingPlayingMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);

    const getTrending = async () => {
        const { results } = await (
            await fetch(TRENDING_URL)
        ).json();
        setTrendingMovies(results)
    }
    const getUpComing = async () => {
        const { results } = await (
            await fetch(UPCOMING_URL)
        ).json();
        setUpComingPlayingMovies(results)
    }
    const getNowPlaying = async () => {
        const { results } = await (
            await fetch(PLAYING_URL)
        ).json();
        setNowPlayingMovies(results);
    }
    const getData = async () => {
        await Promise.all([getNowPlaying(), getUpComing(), getTrending()]);
        setLoading(false);
    }
    useEffect(() => {
        getNowPlaying();
        getTrending();
        setLoading(false);
    }, [])

    const renderItem = ({item}) => (
        <TrendScroll
            overView={item.overview}
            originalTitle={item.original_title}
        />
    )

    const listSeprator = styled.View`
        height: 20px;
    `

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
                        {nowPlayingMovies.map(movie =>
                            <Slide
                                id={movie.id}
                                backdropPath={movie.backdrop_path}
                                posterPath={movie.poster_path}
                                voteAverage={movie.vote_average}
                                originalTitle={movie.title}
                                overview={movie.overview}
                            />
                        )}
                    </Swiper>
                </>
            }
            keyExtractor={(item) => item.id + ""}
            data={trendingMovies}
            renderItem={renderItem}
            ItemSeparatorComponent={listSeprator}
        />
    )
}
