import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ShowMovieDatabase = ()=>
{
    const [movies,SetMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>
    {
        GetMovieData();
    });

    async function GetMovieData()
    {
        let data = await axios.get('http://localhost:5100/getMoviedata'); 
       // console.log(data);   
        data = data.data;
        SetMovies(data);    
    }

    async function Delete(id) 
    {
        let result = await axios.delete (`http://localhost:5100/deleteMovie/${id}`);
        console.log("Delete Pressed "+id);
        console.log(result);
    }

    function Edit (id)
    {
        navigate(`/edit/${id}`);
        console.log("Edit Pressed on  Id "+id);
    }

    return (
        
            <>
                <Link to={'/addMovie'} className="addNewBtn" type="submit">Add New</Link>
        <div className="tableHolder">

            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>Info</th>
                        <th>Video</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((m,index)=>
                        
                            <tr key={'movie_'+index}>
                                <td>{index}</td>
                                <td>{m.name}</td>
                                <td>{DecodeImageLink(m.pic)}</td>
                                <td>{m.info}</td>
                                <td>{m.link}</td>
                                <td>
                                    <button className="editBtn" onClick={()=> Edit(m._id)} type="submit">Edit</button>
                                </td>
                                <td>
                                    <button className="deleteBtn" onClick={()=>Delete(m._id)} type="submit">Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </>

    );
}
export default ShowMovieDatabase; 

 function DecodeImageLink(link)
{
    var url;

    let http = new XMLHttpRequest();
    http.onload = ()=>
    {
        //convert blob to url and download
          url =  window.URL.createObjectURL(http.response);
    }
        
        http.responseType = 'blob';
        http.open('GET',link,true);
        
        return url;
}