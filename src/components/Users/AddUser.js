import React, { useState, useRef } from "react";
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const formSubmitHandler = event => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.length === 0 || enteredAge.length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age and name (non-empty value)'
            });
            setToDefault();
            return;
        }

        if (enteredAge < 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age greater than 0'
            });
            setToDefault();
            return;
        }

        const user = {
            username: enteredName,
            age: +enteredAge,
            id: Math.random().toString()
        }
        props.onAddUser(user);
        setToDefault();
    };

    const closeModal = () => {
        setError();
    };

    const setToDefault = () => {
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onClose={closeModal} />}
            <Card className={styles.input}>
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;