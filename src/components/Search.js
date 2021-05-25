const Search = ({search,searchInput, handleOnChange})=>{
    return (<input type="text" value={search}  onChange={handleOnChange} ref={searchInput}/>)
}
export default Search