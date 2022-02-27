import React from "react";
import { OutlineButton } from "../components/button/Button";
import HeroSlide from "../components/heroSlider/HeroSlide";
import { Link } from "react-router-dom";
import MoviesList from "../components/movie-list/MovieList";
import { category,movieType, tvType } from "../api/tmdbApi";
const Home=()=>{
    return (
        <div>
           <HeroSlide></HeroSlide>
           <div className="container">
               <div className="section mb-3">
                   <div className="section__header mb-2">
                       <h2>Trending Movies</h2>
                       <Link to='/moive'>
                           <OutlineButton className='small'>
                                View more
                           </OutlineButton>
                       </Link>
                   </div>
                   <MoviesList category={category.movie} type={movieType.popular}/>
               </div>
               <div className="section mb-3">
                   <div className="section__header mb-2">
                       <h2>Top Rated Movies</h2>
                       <Link to='/moive'>
                           <OutlineButton className='small'>
                                View more
                           </OutlineButton>
                       </Link>
                   </div>
                   <MoviesList category={category.movie} type={movieType.top_rated}/>
               </div>
               <div className="section mb-3">
                   <div className="section__header mb-2">
                       <h2>Trending TV</h2>
                       <Link to='/tv'>
                            <OutlineButton className='small'>
                                View more
                           </OutlineButton>
                       </Link>
                   </div>
                   <MoviesList category={category.tv} type={tvType.popular}/>
               </div>
               <div className="section mb-3">
                   <div className="section__header mb-2">
                       <h2>Top Rated TV</h2>
                       <Link to='/tv'>
                           <OutlineButton className='small'>
                                View more
                           </OutlineButton>
                       </Link>
                   </div>
                   <MoviesList category={category.tv} type={tvType.top_rated}/>
               </div>
           </div>
        </div>
    )
}
export default Home;