import axios from "axios";
import { useNavigate } from "react-router-dom";
const { useState } = require("react");

const AddShow = ()=>
{
   const [name,SetName] = useState('');
   const [pic,SetPic] = useState('');
   const [info,SetInfo] = useState('');
   const [link,SetLink] = useState('');
    const navigate = useNavigate();

    async function AddData()
   {
        let data = await axios(
            {
                method:'post',
                url:'http://localhost:5100/addShow',
                data:{
                        name:name,
                        pic:pic,
                        info:info,
                        link:link
                    }
            });
        console.log(data);
        navigate('/showdatabase');
   }

    return(
        <div className="addmenuHolder">
            <input type="text" value={name} onChange = {(e)=> SetName(e.target.value)} className="addMenu" placeholder="Add ShowName" />
            <input type="text" value={pic} onChange ={(e)=> SetPic(e.target.value)} className="addMenu" placeholder="Picture Link" />
            <input type="text" value={info} onChange ={(e)=> SetInfo(e.target.value)} className="addMenu" placeholder="Information" />
            <input type="text" value={link} onChange={(e)=> SetLink (e.target.value)} className="addMenu" placeholder="Video Link" />
            <button className ="add_button" type="submit" onClick={AddData}>Submit</button>
        </div>
    );
}
export default AddShow;