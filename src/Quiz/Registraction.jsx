
import React from 'react';
import './Registractionpage.css';

class Registration extends React.Component {

    constructor(props) {
        super(props);

        const userArrayList = JSON.parse(localStorage.getItem('userList')) || [];

        this.state = {
            username: "",
            password: "",
            email: "",
            users: userArrayList,

  };

};
    
   handleChange = (e) => {

        const { name, value } = e.target;
          this.setState({
              [name]: value

 });

};
   
       handleSubmit = (e) => {
        e.preventDefault();
          const { username, password, email, users } = this.state;
        const newUser = {
            username,
            password,
            email
};


     if (!username || !password || !email) {
            alert('Please enter all values');
            return;
     }

        const updatedUsers = [...users, newUser];
        this.setState({ users: updatedUsers }, () => {

            localStorage.setItem('userList', JSON.stringify(this.state.users));
            alert('User registered successfully');

});


    };

    render() {

    return (

                 <div>

                <h2>Registration</h2>

                <form onSubmit={this.handleSubmit}>

                    <div>
                    <label>Username:</label>
                     <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>

                    <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div>

                        <label>Email:</label>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
    </div>
                    <br></br>
                    <button type="submit">Submit</button>

             </form>
            </div>

 );
}
}
export default Registration;