import "./App.css";
import { signWithGoogle, LogoutGoogle } from "./components/firebase";

function App() {
  return (
    <>
      <h1>user data</h1>

      <button
        onClick={signWithGoogle}
        type="button"
        className="login-with-google-btn"
      >
        Sign in with Google
      </button>

      <button
        onClick={LogoutGoogle}
        type="button"
        className="login-with-google-btn"
      >
        log out with Google
      </button>
    </>
  );
}

export default App;
