import React, { useEffect, useState } from "react";

import styled from "styled-components";

function Footer() {
  const [data, fetchData] = useState("");
  useEffect(() => {
    fetch("https://backend-omega-seven.vercel.app/api/getjoke")
      .then((response) => response.json())
      .then((data) => fetchData(data));
  }, []);
  console.log(data);
  const FlexContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
  `;
  return (
    <div>
      <FlexContainer className="footer">
        <i className="bi bi-facebook icon-size-footer"></i>
        <span>help</span>
        <span>jobs</span>
        <i className="bi bi-instagram icon-size-footer"></i>
        <div>
          <p>{data && data[0].question}</p>
          <p>{data && data[0].punchline}</p>
        </div>
      </FlexContainer>
    </div>
  );
}

export default Footer;
