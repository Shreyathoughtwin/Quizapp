

import React, { useState, useEffect } from 'react';
import './FetchData.css';

    function FetchData() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => {

                if (!response.ok) {
                     throw new Error('Network  failed');
}

                return response.json();

})
         
    .then(data => {
              console.log(data);
                 setData(data);
                setLoading(false);

    })

            .catch(error => {
                setError(error);
                 setLoading(false);

 });
},
 []);

         if (loading) {

        return <div>Loading...</div>;

 }

             if (error) {

            return <div>Error: {error.message}</div>;
      }

    return (

        <div className="container">
       <h1>Fetch API Data</h1>

        <div className="card-list">

                {data.map(item => (
                <div key={item.id} className="card">
                <p>User ID: {item.id}</p><br></br>
            <h2>Title: {item.title}</h2>
                        <p>Status: {item.completed ? "(Completed)" : "(Pending)"}</p>
              </div>
  ))}

 </div>

</div>

    );

}
export default FetchData;