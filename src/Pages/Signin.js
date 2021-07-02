import React from "react";
import { useState } from "react";
import RegisterPage from "./RegisterPage";
import SigninPage from "./SigninPage";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profliePic, setProfilePic] = useState("");
  const [hasAccount, setHasAccount] = useState();
  const [errorName, setErrorName] = useState();
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  // Create Account
  const register = () => {
    if (!name) {
      return setErrorName("Please enter full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profliePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profliePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <>
      <div className="min-h-screen bg-white flex justify-center items-center flex-col">
        <img
          className="h-12 flex pb-2"
          src="https://t3.ftcdn.net/jpg/03/95/39/16/360_F_395391650_6LfU41V5A4WIhdTis899OaF7wXVgThgP.jpg"
        />
        {hasAccount ? (
          <>
            <RegisterPage
              name={name}
              email={email}
              password={password}
              profliePic={profliePic}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
              setProfilePic={setProfilePic}
              errorName={errorName}
              onClick={register}
            />
            <span className="flex pt-6">
              <h1>New to LinkedIn?</h1>
              <p
                onClick={() => setHasAccount(!hasAccount)}
                className="text-blue-700 font-semibold ml-2 link"
              >
                Sign In
              </p>
            </span>
          </>
        ) : (
          <>
            <SigninPage
              onClick={loginToApp}
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
            />
            <span className="flex pt-6">
              <h1>New to LinkedIn?</h1>
              <p
                onClick={() => setHasAccount(!hasAccount)}
                className="text-blue-700 font-semibold ml-2 link"
              >
                Join Now
              </p>
            </span>
          </>
        )}
        <h1 className="text-xs fixed bottom-4">Linkedin Clone by Xuan Hau</h1>
      </div>
    </>
  );
}
