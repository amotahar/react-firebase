import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './Firebase/Firbase.init';
import { useState } from 'react';


const auth = getAuth(app);

function App() { 
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignin = () =>{
    signInWithPopup(auth, provider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.log("error: ", error);
    })

  }

  const handleSignOut = () =>{
    signOut(auth)
    .then( () =>
      setUser({})
    )
    .catch(()=>{
      setUser({})
    })
  }
  return (
    <div className="App">

  {
     user.email? <button onClick={handleSignOut}>SignOut</button>
      : <button onClick={handleGoogleSignin}>Google</button>
  }
   

      {
      user.email && <div>
        <h2>Name: {user.displayName} </h2>
        <p>Email: {user.email}</p>
        <p>ID: {user.uid}</p>
        <img src={user.photoURL} alt="" />

      </div>
      }
  
    </div>
  );
}

export default App;
