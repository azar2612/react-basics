import React, { Component } from 'react';
import AddUserForm from './AddUserForm';
import UserTable from './UserTable';
import EditUserForm from './EditUserForm';

const userData = [
  { id: 1, name: 'Chaal', username: 'chaalpritam' },
  { id: 2, name: 'Sathihs', username: 'sathishkumar' },
];

const initialEditFormState = { id: null, name: '', username: '' };

class CRUDwoHooks extends Component {

    state = {
        users: userData,
        editing: false,
        currentuser: initialEditFormState,
    };

    addUser = (user) => {
        user.id = this.state.users.length + 1;
        this.setState(({ users }) => ({ users: [user, ...users] }));
    };

    delteUser = id => {
        this.setState({
            users: this.state.users.filter(user => user.id !== id)
        });
    };

    editUser = user => {
        this.setState({
            editing: true,
            currentuser: {
                id: user.id,
                name: user.name,
                username: user.username,
            }
        });
    };

    setEditing = ed => {
        this.setState({
            editing: ed
        });
    };

    updateUser = (id, updateUser) => {
        this.setState({
            editing: false,
            users: this.state.users.map(u => (u.id === id ? updateUser: u))
        });
    };

    render() {
        const { users, editing, currentuser } = this.state;
        return (
        <> 
            <h1>CRUD App without Hooks | Class Component</h1>
            {editing ? (
                <>
                    <h2>Edit User</h2>
                    <EditUserForm 
                        setEditing={this.setEditing}
                        currentuser={currentuser} 
                        userUpdate={this.updateUser}
                    />
                </>
            ) : (
                <>
                    <h2>Add User</h2>
                    <AddUserForm  userAdd={this.addUser}/>
                </>
            )}

            <h2>View Users</h2>
            <UserTable users={users} userDelete={this.delteUser} userEdit={this.editUser}/>
        </>
        );
    }
}

export default CRUDwoHooks;
