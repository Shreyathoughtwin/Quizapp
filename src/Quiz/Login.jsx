
import React from 'react';
import { json } from 'react-router-dom';
import './Loginpage.css';


class Login extends React.Component {

    constructor(props) {
        super(props);

        const userArrayList = JSON.parse(localStorage.getItem('userList')) || [];

           this.state = {
            username: "",
             password: "",
            userArrayList: userArrayList,

};
    }
    
    handleChange = (e) => {
        const { name, value } = e.target;
        console.log('>>>>',name, value )
        this.setState({
            [name]: value
});

};


    handleSubmit = (e) => {
        e.preventDefault();

          const { username, password, userArrayList } = this.state;
        const storedUser = userArrayList.find(user => user.username === username && user.password === password);

        localStorage.setItem('loginUser' , JSON.stringify(storedUser))
          if (storedUser) {

            alert('Login successful');
            this.props.onLogin()
             
 } else {
            alert('Invalid username or password');
     }

 };

        render() {

        return (

              <div>

    <h2>Login</h2>
    <form onSubmit={this.handleSubmit}>
                  
                    <div>
                 <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    
                    </div>
        <div>
                        <label>Password:</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
         </div>
                   
                    <button type="submit">Login</button>
               
                </form>
            </div>
            
);
   
}
}
export default Login;