import './App.css';
import AddUser from './components/AddUser';

function App() {

  const handleNewUser = (user) => {
    let str = JSON.stringify(user);
    console.log(str);
  };

  return (
    <div>
      <AddUser onAddUser={handleNewUser}></AddUser>
    </div>
  );
}

export default App;
