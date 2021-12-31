import React, { useState } from "react";
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = event => {
        setUsername(event.target.value);
    };

    const ageChangeHandler = event => {
        setAge(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();

        if (username.trim().length === 0 || age.length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age and name (non-empty value)'
            });
            setToDefault();
            return;
        }

        if (age < 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age greater than 0'
            });
            setToDefault();
            return;
        }

        const user = {
            username: username,
            age: +age,
            id: Math.random().toString()
        }
        setToDefault();
        props.onAddUser(user);
    };

    const setToDefault = () => {
        setUsername('');
        setAge('');
    };

    const closeModal = () => {
        setError();
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onClose={closeModal} />}
            <Card className={styles.input}>
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={username} onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={age} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;