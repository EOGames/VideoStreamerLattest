import { Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Bottom from "./components/Bottom";
import Movies from "./components/Movies";
import Login from "./Login";
import ShowMovieDatabase from "./movieStuff/ShowMovieDatabase";
import AddMovie from './movieStuff/AddMovie';
import EditMovie from "./movieStuff/EditMovie";
import ShowShowDatabase from "./showStuff/ShowShowDatabase";
import AddShow from "./showStuff/AddShow";
import EditShow from "./showStuff/EditShow";
import Home from "./Home";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Topbar/>

      <Routes>
        <Route path="/" element ={<Home/>}> </Route>
        <Route path="/movies" element ={<Movies linkDataToGet = {'http://localhost:5100/getMoviedata'}/>}> </Route>
        <Route path="/shows" element ={<Movies linkDataToGet = {'http://localhost:5100/getShowsData'}/>}> </Route>
        <Route path="/login" element ={<Login />}> </Route>

        <Route element={<PrivateRoute/>} >

            <Route path="/logout" element ={<h1>Logout</h1>}> </Route>
            <Route path="/moviedatabase" element ={<ShowMovieDatabase />}> </Route>
            <Route path="/showdatabase" element ={<ShowShowDatabase/>}> </Route>


            <Route path="/addMovie" element ={<AddMovie/>}> </Route>
            <Route path="/edit/:id" element ={<EditMovie/>}> </Route>

            <Route path="/addShow" element ={<AddShow/>}> </Route>
            <Route path="/editshow/:id" element ={<EditShow/>}> </Route>
        </Route>
      </Routes>

      <Bottom />
    </div>
  );
}

export default App;
