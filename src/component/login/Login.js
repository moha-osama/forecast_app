import classes from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { setCurrUser } = useAuth();

  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const passWordChangeHandler = (e) => {
    setPassWord(e.target.value);
  };

  const formSubmissionHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await login(userName, passWord);
      setIsLoading(false);
      navigate("/admin");
      setCurrUser(true);
    } catch {
      setError(true);
      setIsLoading(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className={classes.page}>
      <div className={classes.body}>
        <form onSubmit={formSubmissionHandler} className={classes.form}>
          <h2>Login as admin</h2>
          <div className={classes.container}>
            <div className={`${classes.label}${classes.user}`}>
              <FaUserAlt className={classes.svg} />
            </div>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={userName}
              onChange={userNameChangeHandler}
            />
          </div>
          <div className={classes.container}>
            <div className={`${classes.label}${classes.pass}`}>
              <FaLock className={classes.svg} />
            </div>
            <input
              id="password"
              type="password"
              name="password"
              required
              value={passWord}
              onChange={passWordChangeHandler}
            />
          </div>
          <div className={classes.action}>
            <button type="submit">
              {!isLoading ? (
                "Login"
              ) : (
                <div className={classes.spinner}>
                  <div className={classes["lds-spinner"]}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
            </button>
          </div>
        </form>
        {error && (
          <div className={classes["error-message"]}>
            <p>Incorrect email or password</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
