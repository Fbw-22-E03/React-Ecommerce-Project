import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dataContext } from "../../functions/Context";
import "../../styles/main.scss";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

function UserInfo() {
  const { userState, dispatchUserState } = useContext(dataContext);
  const navigate = useNavigate();

  const logOut = () => {
    dispatchUserState({ type: "IS_LOGOUT" });
    navigate("/");
    console.log("from logout function");
  };
  return (
    <div>
      <Wrapper>
        <p>email: {userState.users[0].email}</p>
        <p>password: {userState.users[0].password.length}</p>
        <div className="button-container-user-info">
          <button
            className="btn btn-dark button-styling-user-info"
            onClick={logOut}
          >
            log out
          </button>
          <button
            className="btn btn-primary button-styling-user-info"
            onClick={() => navigate("/")}
          >
            Back to home
          </button>
        </div>
      </Wrapper>
    </div>
  );
}

export default UserInfo;
