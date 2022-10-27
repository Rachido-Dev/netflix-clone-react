import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  
  const readMore =(text,num)=>{
    if(text?.length > num){
      return text.slice(0,num) + '...'
    } else {
      return text
    }
  }


  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black "></div>
      
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute w-full top-[20%] p-4">
        <h1 className='text-3xl md:text-5xl font-bold py-4'>{movie?.title}</h1>
          <div className="buttons">
            <button className="border bg-gray-300 text-black border-gray-400 py-2 px-5 ">
              Play
            </button>
            <button className="border  text-white border-gray-400 py-2 px-5 ml-4 hover:bg-white hover:text-black">
              Watch Later
            </button>
          </div>
          <p className="py-2 text-gray-400" >Released: {movie?.release_date}</p>
          <p>{readMore(movie?.overview,150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
