import React, { useContext } from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { dataContext } from "../../functions/Context";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const Wrapper = styled.div`
  max-width: 28rem;
  // margin: 0.5rem auto;

  width: 100vw;
  // border: solid 1px rgb(0, 0, 0);
  border-radius: 4px;
  background-color: rgba(255, 255, 255);
  // box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.2),
    // 9px 9px 15px -2px rgba(0, 0, 0, 0.1);
`;
const Header = styled.h2`
  // margin: 2rem auto 1.8rem;
  text-align: center;
  letter-spacing: 4px;
`;
function Registration() {
  const { dispatchUserState } = useContext(dataContext);

  const navigate = useNavigate();
  let show = useRef();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    passwordTwo: "",
    accept: false,
    newsletter: false,
    isLogin: false,
  });

  const handleChange = (event) => {
    event.preventDefault();
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  function submitData(e) {
    e.preventDefault();
    if (userInfo.password === userInfo.passwordTwo) {
      e.preventDefault();
      dispatchUserState({ type: "SUBMIT_USER", payload: userInfo });
      show.current.style.display = "none";
      navigate("/Login");
    } else {
      show.current.style.display = "block";
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
        <Alert.Heading>Whoops</Alert.Heading>
        <p>Looks like your passwords don't match</p>
      </Alert>
      <Header>REGISTER</Header>
      <form onSubmit={submitData} onChange={handleChange}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            // onChange={handleChange}
            type="email"
            className="form-control"
            name="email"
            // value={userInfo.email}
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            // onChange={handleChange}
            type="password"
            className="form-control"
            name="password"
            // value={userInfo.password}
          />
        </div>
        <div className="mb-3">
          <label className="form-label"> Re-enter password</label>
          <input
            // onChange={handleChange}
            type="password"
            className="form-control"
            name="passwordTwo"
            // value={userInfo.passwordTwo}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            // onChange={handleChange}
            type="checkbox"
            className="form-check-input"
            name="accept"
            // value={userInfo.accept}
          />
          <label className="form-check-label">
            Accept terms and conditions
          </label>
        </div>
        <div className="mb-3 form-check">
          <input
            // onChange={handleChange}
            type="checkbox"
            className="form-check-input"
            name="newsletter"
            // value={userInfo.newsletter}
          />
          <label className="form-check-label">Register for newsletter</label>
        </div>
        <button
          style={{ display: "block" }}
          type="submit"
          className="login-btn btn btn-outline-dark"
        >
          Submit
        </button>
      </form>
    </Wrapper>
  );
}

export default Registration;
