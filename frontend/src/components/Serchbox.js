const Searchbox = (props)=>
{
    return (
        <div className="searchBox">
            <input onChange={props.OnSearchChange} type="text" className="searchbox" placeholder="Enter name to search" />
        </div>
    );
}
export default Searchbox;