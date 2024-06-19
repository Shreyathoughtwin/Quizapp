

import React from 'react';
 import QuizApp from "./QuizApp";
 import Login from "./Login";

    class User extends React.Component {
        constructor(props) {
        super(props);

        this.state = {

       username:'',
      isLoggedin:false,

 
      }

  };


     handleLogin = () =>{
    this.setState({isLoggedin:true});

   }


render(){

    const{username,isLoggedin}=this.state;

    return(

     <div>
            {isLoggedin?(<QuizApp username={username}/>
            ):(
            <Login onLogin={this.handleLogin}/>
            )}
        </div>
);
}

}


export default User ;

