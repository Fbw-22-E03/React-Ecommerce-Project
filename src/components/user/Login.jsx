import React, { useContext, useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dataContext } from "../../functions/Context";
import Alert from "react-bootstrap/Alert";

const Wrapper = styled.div`
  max-width: 28rem;
  margin: 2rem auto;

  width: 80vw;
  // border: solid 1px rgb(0, 0, 0);
  border-radius: 4px;
  background-color: rgba(255, 255, 255);
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.2),
    9px 9px 15px -2px rgba(0, 0, 0, 0.1);
`;
const Header = styled.h2`
  margin: 2rem auto 3rem;
  text-align: center;
  letter-spacing: 4px;
`;

function Login() {
  const { userState, dispatchUserState } = useContext(dataContext);
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();
  let show = useRef();

  const handleChange = (event) => {
    event.preventDefault();
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  function submitData(e) {
    e.preventDefault();
    for (let user of userState.users) {
      if (
        user.email === userInfo.email &&
        user.password === userInfo.password
      ) {
        dispatchUserState({ type: "IS_LOGIN", payload: userInfo });
        navigate("/");
      } else {
        show.current.style.display = "block";
      }
    }
  }

  return (
    <Wrapper>
      <Alert
        ref={show}
        style={{ display: "none" }}
        variant="danger"
        onClose={() => (show.current.style.display = "none")}
        dismissible
      >
        {/* <Alert.Heading>Whoops</Alert.Heading> */}
        <p>Incorrect email or password</p>
      </Alert>
      <Header>LOGIN</Header>
      <form onSubmit={submitData} onChange={handleChange}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input type="email" name="email" className="form-control" />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-control" />
        </div>
        <button type="submit" className="login-btn btn btn-outline-dark">
          Log in
        </button>
      </form>
      <Link className="login-link" to="/Registration">
        Not registered yet? Click here.
      </Link>
    </Wrapper>
  );
}

export default Login;
