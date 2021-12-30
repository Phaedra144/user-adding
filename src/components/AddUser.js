import React, { useState } from "react";
import styles from './AddUser.module.css';
import Button from './UI/Button';

const AddUser = (props) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const usernameChangeHandler = event => {
        setUsername(event.target.value);
    };

    const ageChangeHandler = event => {
        setAge(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        const user = {
            username: username,
            age: +age,
        }
        setUsername('');
        setAge('');
        props.onSaveExpense(user);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='input'>
                <label>Username</label>
                <input type="text" onChange={usernameChangeHandler} />
            </div>
            <div className='input'>
                <label>Age (Years)</label>
                <input type="number" onChange={ageChangeHandler} />
            </div>
            <Button type="submit">Add User</Button>
        </form>
    );
};

export default AddUser;