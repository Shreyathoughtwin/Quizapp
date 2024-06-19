import React from 'react';

function Card({data}){
    return(
        <div className="card-list">
            {data.map(item => (
                <div key={item.id} className="card">

                <p>User ID: {item.id}</p><br></br>
               <h2>Title: {item.title}</h2>
                        <p>Status: {item.completed ? "(Completed)" : "(Pending)"}</p>

     </div>

 ))}
        </div>
    );
}

export default Card