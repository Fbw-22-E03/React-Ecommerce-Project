import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
  width: auto;
  max-width: 28rem;
  border: solid 1px rgb(0, 0, 0);
  border-radius: 4px;
  background-color: rgba(255, 255, 255);
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.2),
    9px 9px 15px -2px rgba(0, 0, 0, 0.1);
  i {
    font-size: 3rem;
    color: green;
  }
  p {
    font-size: 1.5rem;
  }
  button {
    margin: 2rem;
  }
`;
function LogoutSuccessPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Wrapper>
        <h1>ASK</h1>
        <i class="bi bi-check-circle"></i>
        <p>You have been logged out</p>
        <p>Thank you</p>
        <button
          className="login-btn btn btn-outline-dark button-styling-user-info"
          onClick={() => navigate("/")}
        >
          Back to home
        </button>
      </Wrapper>
    </div>
  );
}

export default LogoutSuccessPage;
