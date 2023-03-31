import { Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Movies from "./Movies";
import Login from "./Login";
import ShowDatabase from "./ShowDatabase";
import AddMovie from './AddMovie';
import EditMovie from "./EditMovie";

function App() {
  return (
    <div className="App">
      <Topbar/>

      <Routes>
        <Route path="/" element ={<h1> Home</h1>}> </Route>
        <Route path="/movies" element ={<Movies linkDataToGet = {'http://localhost:5100/getMoviedata'}/>}> </Route>
        <Route path="/shows" element ={<h1> Shows</h1>}> </Route>
        <Route path="/login" element ={<Login />}> </Route>
        <Route path="/logout" element ={<h1>Logout</h1>}> </Route>

        <Route path="/database" element ={<ShowDatabase />}> </Route>
        <Route path="/add" element ={<AddMovie/>}> </Route>
        <Route path="/edit/:id" element ={<EditMovie/>}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;
