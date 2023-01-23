import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup  } from 'firebase/auth';
import app from './Firebase/Firbase.init';

const auth = getAuth();

function App() { 
  const provider = new GoogleAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
     signInWithPopup(auth, )
    .then((result) => {
        console.log(result);
      })
    .catch((error) => {
        console.log("error: ", error);
  })
}
  return (
    <div className="App">

      <button onClick={handleGoogleSingIn}>Google</button>
     
    </div>
  );
}

export default App;
