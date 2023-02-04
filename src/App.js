import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Discord from "./components/Discord";
import { Header } from "./components/Header";
import Login from "./components/Login";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
        // the user is logged in
      } else {
        // the user is not logged in
        dispatch(logout());
      }
    });
  }, [dispatch]);
  // if user login then go to app other go to header page for login
  return <div className="App">{user ? <Discord /> : <Header />}</div>;
}

export default App;
