import React, { useEffect } from "react";
 import useFetch from "./useFetch";
// import FetchData from "./FetchData";
import ErrorMessage from "./ErrorMessasge";
import Loading from "./Loading";
import Card from "./Card";
import './FetchData.css';

function DataFetch() {
    const {data,loading,error}=useFetch('https://jsonplaceholder.typicode.com/todos');

    if (loading) {

        return<Loading/>
       

 }

             if (error) {

            return <ErrorMessage message= {error.message}/>;
      }

return(

    <div className="container">
    <h1>Fetch API Data</h1>
    <Card data={data}/>

</div>

);

}
export default DataFetch;