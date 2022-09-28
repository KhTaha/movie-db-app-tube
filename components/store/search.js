import React, { useEffect, useState } from "react";
import useFetch from "./use-fetch";
import movies from "../UI/movies";
import ReactPlayer from 'react-player'
import Button from "../UI/Button";
import Card from "../UI/Card";
const Search = (props) => {
    const [searchVal, setSearchVal] = useState('');
    const [fetchData, setFetchData] = useState(false);
    const [seacrhData, setSearchData] = useState([]);
    const [matches, setmatches] = useState([]);
    const {loading } = useFetch(fetchData);
    const searchHandler = (event) => {
        setSearchVal(event.target.value);
        if (event.target.value.length > 0) {
            setFetchData(true);
        }
        else {
            setmatches([]);
        }
        //     const searchData=movies.filter((item)=>{          
        //         return item.name === searchVal;           
        //     });  
        // console.log(searchData);
        // const items=movies.map((item)=>{
        //     const name=item.name;

        // })
    }

    useEffect(() => {
        if (!loading) {
            setSearchData(movies);
        }
    }, [loading, setSearchData]);

    useEffect(() => {
        if (seacrhData && searchVal.length > 1) {
            setmatches(getMatches(seacrhData, searchVal));
            console.log("matches update");
        }
    }, [seacrhData, searchVal, setmatches, getMatches])

    const subcribeHandler = () => {
        alert("Subscribed");
    }
    return (
        <>
            <div>
                <label htmlFor="search">Search Value</label>
                <textarea id="search" onChange={searchHandler} onClick={props.onClick}></textarea>
            </div>
            {matches.length==0? <div>No Data Found</div> :  props.searchVal && !props.homeVal && matches.map((item) => (
                <Card item={item} subsHandler={subcribeHandler} btnText="Subscribe"/>
                ))}
        </>


    )
}
function getMatches(response, searchString) {
    return response.filter(
        (item) =>
            item.name.search(new RegExp(searchString, "i")) > -1
    );
}
export default Search;