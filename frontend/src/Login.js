import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ()=>
{
    const [name,SetName] = useState([]);
    const [password,SetPassword] = useState([]);
    const navigate = useNavigate ();

    const auth = localStorage.getItem('admin');
     useEffect(()=>
     {
        if (auth)
        {
            navigate('/');
        }
     });
    async function CollectData ()
    {
        let result = await axios.post("http://localhost:5100/login",
        {
            name: name,
            password: password
        });

        result = result.data;

        if (result ==='logged')
        {
            localStorage.setItem('admin',JSON.stringify(result));
            // alert('Welcome Admin');
            window.location.href = '/';
            //navigate('/database');
        }else
        {
            alert('Wrong User Or Password');
        }
        // console.log(name,password);
        // console.log(result);
    }
    return(
        <div className="loginPanel">
            <>
                <input value={name} onChange = {(e)=> SetName(e.target.value)} type="text"  className="inputPanel" placeholder="Enter User Name" /> <br />
                <input value={password} onChange= {(e)=> SetPassword(e.target.value)} type="password"  className="inputPanel" placeholder="Enter Password" /> <br />
                <input type="submit" onClick={CollectData} id="" className="inputPanel" /> 
            </>
        </div>
    );
}
export default Login;