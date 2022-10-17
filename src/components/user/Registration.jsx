import React, { useContext } from "react";
import styled from "styled-components";
import { useState } from "react";
import { dataContext } from "../../functions/Context";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  margin: 3rem;
  max-width: 900px;
`;
const Header = styled.h2`
  margin: 2rem;
`;
function Registration() {
  const { dispatch } = useContext(dataContext);

  const navigate = useNavigate();

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
    dispatch({ type: "SUBMIT_USER", payload: userInfo });
    navigate("/login");
  }

  return (
    <Wrapper>
      <Header>Register</Header>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Wrapper>
  );
}

export default Registration;
