import React from "react";
import User from "./User";
import styles from "./UserList.module.css";
import Card from '../UI/Card';

const UserList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.content.map((user) => (
                    <User
                        key={user.id}
                        username={user.username}
                        age={user.age}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default UserList;