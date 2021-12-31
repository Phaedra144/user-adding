import React, { useState } from "react";
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';

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
        props.onAddUser(user);
    };

    return (
        <Card className={styles.input}>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;