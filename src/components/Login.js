// import React from "react";
import { auth, provider } from "../firebase";
const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <div className="">
      <div className="flex items-center justify-center flex-col">
        <h1>Login With Google ...</h1>
        <img
          src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
          alt="discord logo"
        />
        <button className="bg-blue-600" onClick={signIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
