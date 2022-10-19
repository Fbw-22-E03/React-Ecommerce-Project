import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  i {
    font-size: 3rem;
    color: green;
  }
  p {
    font-size: 2rem;
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
          className="over-btn btn btn-light button-styling-user-info"
          onClick={() => navigate("/")}
        >
          Back to home
        </button>
      </Wrapper>
    </div>
  );
}

export default LogoutSuccessPage;
