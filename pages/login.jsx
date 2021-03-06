import React, { useEffect, useState, useContext } from "react";
import { useSpring, animated as a, config } from "react-spring";
import Head from "next/head";
import Link from "next/link";

import Logo from "./../assets/UNGAR_NEW_LOGO.svg";

import useForm from "../utils/useForm.jsx";
import { BlurContext } from "../context/BlurContext.js";

const Login = () => {
  // const [blur, setBlur] = useContext(BlurContext);
  const [blur, setBlur] = useState(null);
  // const [blurString, setBlurString] = useState("none");
  const [loaded, setLoaded] = useState(false);

  const {
    handleChange,
    handleSubmit,
    values,
    loginStatus,
    setLoginStatus,
  } = useForm();

  const fadeInFromTop = useSpring({
    marginTop: loginStatus != null ? "0px" : "-500px",
  });

  const loginSpring = useSpring({
    marginTop: loaded ? "0px" : "500px",
  });

  const logoSpring = useSpring({
    marginTop: loaded ? "0px" : "-500px",
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const blurSpring = useSpring({
    filter: blur == null ? "blur(0px)" : `blur(${blur}px)`,
    config: { duration: 20 },
  });

  // const mailStatusSpring = useSpring({
  //   to: { opacity: 1, marginTop: "0px" },
  //   from: { opacity: 0, marginTop: "-500px" },
  // });

  function isValiEmail(val) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
      return "Invalid Email Address";
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>Ungar | Blogging, Programming and Self-improvement</title>
      </Head>
      {loginStatus != null ? ( //setting this to login to validate if login has been sent or valid
        <div className="status-alert">
          {
            <a.div style={fadeInFromTop} className="alert-box">
              {loginStatus == "success" ? (
                <div className="alert-success" style={{"width":"100%"}}>
                  <p>
                    This account is not registered yet. Please contact me to
                    request an account.
                  </p>
                </div>
              ) : (
                <div className="alert-error">
                  <p>There was a connection problem with the server.</p>
                </div>
              )}
              <div className="alert-buttons">
                <button
                  className="alert-contact"
                  style={{ color: "white" }}
                  onClick={() => {
                    setBlur(null);
                  }}
                >
                  <Link href="/contact">
                    <a>contact</a>
                  </Link>
                </button>
                <button
                  className="alert-ok"
                  onClick={() => {
                    setLoginStatus(null);
                    setBlur(null);
                  }}
                >
                  OK
                </button>
              </div>
            </a.div>
          }
        </div>
      ) : null}

      <a.div style={blurSpring} className="ug-login">
        <div className="ug-login-elements">
          <a.div className="ug-login-logo" style={logoSpring}>
            <Link className="ug-login-logo-link" href="/">
              <a>
                <Logo height="120px" width="120px" />
              </a>
            </Link>
          </a.div>
          <a.div className="ug-login-box" style={loginSpring}>
            <div className="ug-login-name">login</div>
            <form onSubmit={handleSubmit} className="ug-login-form">
              <input
                onChange={handleChange}
                type="email"
                name="email"
                className="ug-login-form-input"
                placeholder="email"
                value={values.email}
                required
              />
              <br />
              <input
                onChange={handleChange}
                type="password"
                name="password"
                className="ug-login-form-input"
                placeholder="password"
                value={values.password}
                autoComplete="on"
                required
              />
              <div className="ug-login-form-button_wrapper">
                {/* <div className="Login-Back"><Link to="/content">go back</Link></div> */}
                <input
                  type="submit"
                  value="OK"
                  className="ug-login-form-submit"
                  onClick={() => {
                    if (!(values.password == "" || values.email == "")) {
                      if (
                        isValiEmail(values.email) != "Invalid Email Address"
                      ) {
                        setBlur(4);
                      }
                    }
                  }}
                  required
                />
              </div>
            </form>
          </a.div>
          <div className="ug-login-name"></div>
        </div>
      </a.div>
    </React.Fragment>
  );
};

export default Login;
