import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {

  const [users, setUsers] = useState([
    { username: 'Marika', age: '42', id: 'dde424' },
    { username: 'Bonifác', age: '12', id: 'rg636' }
  ]);

  const handleNewUser = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
    let str = JSON.stringify(user);
    console.log(str);
  };

  return (
    <div>
      <AddUser onAddUser={handleNewUser} />
      <UserList content={users}></UserList>
    </div>
  );
}

export default App;
