import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import '../index.css';



const Row = ({title,fetchURL}) => {
    const [movies,setMovies] = useState([])

    useEffect(()=>{
        axios.get(fetchURL).then((response) =>{
            setMovies(response.data.results)
        })
    },[fetchURL])
  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className="relative flex items-center">
            <div id={'slider'} >
                {movies.map((item)=>(
                    <div className='w-[160px] inline-block flex-row viewer' >
                       <img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt="" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Row