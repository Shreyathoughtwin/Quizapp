import {useState,useEffect} from 'react';

function useFetch(url){
 const[data,setdata]=useState([]);
 const[loading,setloading]=useState(true)

 const [error, setError] = useState(null);

 useEffect(() => {
    fetch(url)
.then(response => {

    if (!response.ok) {
        throw new Error('Network  failed');
}

    return response.json();

})

.then(data => {
  console.log(data);
    setdata(data);
    setloading(false);

})

.catch(error => {
    setError(error);
    setloading(false);

});
},[url]);

return{data,loading,error};

}
export default useFetch;