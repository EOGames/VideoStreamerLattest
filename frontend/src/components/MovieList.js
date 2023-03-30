import React, { useEffect, useState } from "react";
import axio from 'axios';
import Card from './Cards';

const MovieList = ()=>
{
    
    const [data,SetMovieData] = useState([]);

   async function GetData ()
    {
        let movies = await axio.get('http://localhost:5100/getMoviedata');
        movies = movies.data;
       // console.log(movies);
        SetMovieData(movies);
    }

    useEffect(()=>
    {
        GetData();
    });
    
    return(
        <div className= 'videoHolder'>
            {
                data.map((vid,index)=>
                
                    <Card key ={'movie'+index} cla ={'video'} pic ={vid.pic} vlink ={vid.link} info ={vid.info}/>
                )
            }
        </div>
    );
}
export default MovieList;