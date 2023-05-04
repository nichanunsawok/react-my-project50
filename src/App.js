import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

function App() {
  const [count, setCount] = useState(0);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);

  }
  
  function handlepasswordchange(event){ 
    setPassword(event.target.value);

  }
function handleSubmit(event){
  event.preventDefault();
  console.log(username)
  console.log(password)
}

  function handleClick() {

    setCount(count + 1);
  }

  return (<>
      <div className="App">
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>

    </div> 
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange}/>
         </label>
        <br />
<label> Password:
  <input type="password" value={password} onChange={handlepasswordchange}/>
</label>
<br />

<button type="submit">Login</button>

      </form> 

     <h1>Username = {username} </h1>
     <br />
     Password = {password}
    </div>
    </>

  );
}

export default App;
