import React, { Component } from 'react'
import axios from 'axios';

class CreateUser extends Component {

    state = {
        users: [],
        username: ''
    }

    async componentDidMount() {
        this.getUsers(); 
    }

    getUsers = async (e) => {
        const res = await axios.get('http://localhost:4000/api/users'); 
        console.log(res);
        const { data } = res;
        this.setState({
            users: data
        })
        console.log(this.state.users);
    }

    onChangeUsername = (e) => {
        //console.log(e.target.value);
        this.setState({
            username: e.target.value
        })
        console.log(this.state.username);
    }

    onSubmit = async (e) => {
        e.preventDefault(); // Para no resetear la página por el formulario
        /* Enviar los datos al servidor */
        const res = await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        });
        this.setState({
            username: ''
        });
        this.getUsers();
        console.log(res);
    }

    deleteUser = async (id) => {
        await axios.delete(`http://localhost:4000/api/users/${id}`);
        console.log(id);
        this.getUsers(); 
    }

    render() {

        const users = this.state.users; 
        // console.log(users);
        
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    placeholder="New User..."/>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            users.map(user => 
                                (
                                    <li 
                                        className="list-group-item list-group-item-action" 
                                        key={user._id}
                                        onDoubleClick={() => this.deleteUser(user._id)}
                                    >
                                            {user.username}
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default CreateUser;