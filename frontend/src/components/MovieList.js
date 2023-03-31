import React, { useEffect, useState } from "react";
import axio from 'axios';
import Card from './Cards';
import Searchbox from './Serchbox';

const MovieList = (props) => {

    let [data, SetMovieData] = useState([]);
    const [seachfield,SetSearch] = useState('');

   function OnSearchChange(event) 
    {
        SetSearch(event.target.value);
      //  console.log(event.target.value)
    };

    async function GetData() {
        let movies = await axio.get(props.linkDataToGet);
        movies = movies.data;
        // console.log(movies);
        SetMovieData(movies);
    }

    useEffect(() => {
        GetData();
    });

    data = data.filter(vid =>
        {
            return vid.name.toLowerCase().includes(seachfield.toLowerCase());
        });
    return (
        <>
            <Searchbox OnSearchChange = {OnSearchChange} />
            <div className='videoHolder'>
                {
                    data.map((vid, index) =>

                        <Card key={'movie' + index} cla={'video'} pic={vid.pic} vlink={vid.link} info={vid.info} />
                    )
                }
            </div>
        </>
    );
}
export default MovieList;