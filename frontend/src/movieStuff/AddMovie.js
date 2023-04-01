import axios from "axios";
import { useNavigate } from "react-router-dom";
const { useState } = require("react");

const AddMovie = ()=>
{
   const [name,SetName] = useState('');
   const [pic,SetPic] = useState('');
   const [info,SetInfo] = useState('');
   const [link,SetLink] = useState('');
    const navigate = useNavigate();

    function ConvertImageToBase64(e)
    {
        console.log(e);
        
        let reader = new FileReader();

        reader.readAsDataURL (e);
        reader.onloadend = ()=>
        {
            console.log(reader.result);
            SetPic(reader.result);
        }
    }
    async function AddData()
   {
   
        let data = await axios(
            {
                method:'post',
                url:'http://localhost:5100/addMovie',
                data:{
                        name:name,
                        pic:pic,
                        info:info,
                        link:link
                    }
            });
        console.log(data);
        navigate('/moviedatabase');
   }

    return(
        <div className="addmenuHolder">
            Add Image URL or Upload Directly 
            <img className="picPreview" src={pic} alt="Pic Preview Here" />
            <input className="upload"  type="file" name="" id="" onChange={(e)=> ConvertImageToBase64(e.target.files[0])}  />
            <input type="text" value={name} onChange = {(e)=> SetName(e.target.value)} className="addMenu" placeholder="Add MovieName" />
            <input type="text" value={pic} onChange ={(e)=> SetPic(e.target.value)} className="addMenu" placeholder="Picture Link" />
            <input type="text" value={info} onChange ={(e)=> SetInfo(e.target.value)} className="addMenu" placeholder="Information" />
            <input type="text" value={link} onChange={(e)=> SetLink (e.target.value)} className="addMenu" placeholder="Video Link" />
            <button className ="add_button" type="submit" onClick={AddData}>Submit</button>
        </div>
    );
}
export default AddMovie;