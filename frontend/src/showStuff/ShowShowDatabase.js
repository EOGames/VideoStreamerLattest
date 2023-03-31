import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ShowShowDatabase = ()=>
{
    const [shows,SetShows] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>
    {
        GetShowData();
    });

    async function GetShowData()
    {
        let data = await axios.get('http://localhost:5100/getShowsData'); 
       // console.log(data);   
        data = data.data;
        SetShows(data);    
    }

    async function Delete(id) 
    {
        let result = await axios.delete (`http://localhost:5100/deleteShow/${id}`);
        console.log("Delete Pressed "+id);
        console.log(result);
    }

    function Edit (id)
    {
        navigate(`/editshow/${id}`);
        console.log("Edit Pressed on  Id "+id);
    }

    return (
        
            <>
                <Link to={'/addShow'} className="addNewBtn" type="submit">Add New</Link>
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
                        shows.map((m,index)=>
                        
                            <tr key={'show_'+index}>
                                <td>{index}</td>
                                <td>{m.name}</td>
                                <td>{m.pic}</td>
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
export default ShowShowDatabase; 