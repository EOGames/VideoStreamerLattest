import MovieList from './components/MovieList';

const Movies = (props)=>
{
    return (
        <>
            <MovieList linkDataToGet = {props.linkDataToGet} />
        </>
    );
}
export default Movies;