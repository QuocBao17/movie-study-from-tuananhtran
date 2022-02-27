import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './MovieList.scss';

import { SwiperSlide, Swiper } from 'swiper/react';
import MovieCard from '../movie-card/MovieCard';

import tmdbApi, { category } from '../../api/tmdbApi';

const MoviesList = props => {

    const [items, setItem]=useState([]);

    useEffect(()=>{
        const getList = async()=>{
            let response = null;
            const params={};
            if(props.type!=='similar'){
                switch(props.category){
                    case category.movie : 
                        response = await tmdbApi.getMoviesList(props.type,{params});
                        break;
                    default:
                        response= await tmdbApi.getTvList(props.type,{params})
                }
            }
            else{
                response = await tmdbApi.similar(props.category, props.id)
            }
            setItem(response.results)
        }
        getList();
    },[])
    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item,i)=>(
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category}></MovieCard>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

MoviesList.propTypes = {
    category:PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MoviesList
