import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dataContext } from "../../functions/Context";
import "../../styles/main.scss";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  max-width: 50vw;
  margin: auto;
  border: solid 1px;
  padding: 1.2rem;
`;

function UserInfo() {
  const { userState, dispatchUserState } = useContext(dataContext);
  const [newState, setNewState] = useState();
  const navigate = useNavigate();

  const formRef = useRef();
  const oldPass = useRef();
  const newPass = useRef();
  const confirmPass = useRef();
  const successPass = useRef();

  const logOut = () => {
    dispatchUserState({ type: "IS_LOGOUT" });
    navigate("/LogoutSuccessPage");
  };

  function toggleForm() {
    if(formRef.current.style.display === "block") {
      formRef.current.style.display = "none";
      successPass.current.style.display = "none";
    }
    else {formRef.current.style.display = "block";
       successPass.current.style.display = "none";
  }
  }

  function handleOnChange(e) {
    setNewState({ ...newState, [e.target.name]: e.target.value });
    newPass.current.style.display = "none";
    oldPass.current.style.display = "none";
    confirmPass.current.style.display = "none";
  }

  function handleChangePassword(e) {
    e.preventDefault();
    if (userState.users[0].password === newState.newPassword) {
      newPass.current.style.display = "block";
      console.log('button')
    } else if (userState.users[0].password !== newState.oldPassword) {
      oldPass.current.style.display = "block";
    } else if ( newState.newPassword !== newState.confirmPassword) {
      confirmPass.current.style.display = "block";
    } else if (userState.users[0].password !== newState.newPass &&
      userState.users[0].password == newState.oldPassword &&
      newState.newPassword === newState.confirmPassword
      ) {
        console.log('submit')
        dispatchUserState({type: "CHANGE_PASSWORD", payload: newState})
        formRef.current.reset();
        successPass.current.style.display = "block";
        newPass.current.style.display = "none";
        oldPass.current.style.display = "none";
        confirmPass.current.style.display = "none";
      }
    console.log(userState.users[0].password, newState.oldPass)
  }
  return (
    <div>
      <Wrapper>
        <img
          className="img-styles-user-info"
          src="https://s1.reutersmedia.net/resources/r/?m=02&d=20110106&t=2&i=297909111&w=780&fh=&fw=&ll=&pl=&sq=&r=2011-01-06T234808Z_01_BTRE7051U4200_RTROPTP_0_USA"
          alt=""
        />
        <p className="email-text-user-info">
          email: {userState.users[0].email}
        </p>
        <div className="button-container-user-info">
          <button
            className="btn btn-outline-dark button-styling-user-info btn-out rounded-0"
            onClick={logOut}
          >
            Log Out
          </button>
          <button
            className="btn btn-outline-dark button-styling-user-info rounded-0"
            onClick={() => navigate("/")}
          >
            Back to home
          </button>
          <button onClick={toggleForm} className="btn btn-outline-dark button-styling-user-info rounded-0">
            Change password
          </button>
        </div>
        <form
          style={{ display: "none" }}
          ref={formRef}
          onChange={handleOnChange}
          onSubmit={handleChangePassword}
        >
          <label htmlFor="oldPassword">Old password:</label>
          <br />
          <p
            ref={oldPass}
            style={{ fontSize: "12px", color: "red", display: "none" }}
          >
            Wrong old password
          </p>
          <input type="password" id="oldPassword" name="oldPassword" />
          <br />
          <label htmlFor="newPassword">New password:</label>
          <br />
          <p
            ref={newPass}
            style={{ fontSize: "12px", color: "red", display: "none" }}
          >
            New password can not be the same as old one
          </p>
          <input type="password" id="newPassword" name="newPassword" />
          <br />
          <label htmlFor="confirmPassword">Confirm password:</label>
          <br />
          <p
            ref={confirmPass}
            style={{ fontSize: "12px", color: "red", display: "none" }}
          >
            Passwords do not match
          </p>
          <input type="password" id="confirmPassword" name="confirmPassword" />
          <br />
          <br/>
          <p
            ref={successPass}
            style={{ fontSize: "12px", color: "green", display: "none" }}
          >
            Change password successfully
          </p>
          <input type="submit" value="Submit" className="btn btn-outline-dark button-styling-user-info rounded-0"/>
        </form>
      </Wrapper>
    </div>
  );
}

export default UserInfo;
