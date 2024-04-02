import React from "react";
import background from "../assests/netflix-clone-react-node/netflix-ui/src/assets/login.jpg";
import styled from "styled-components";
export default function BackgroundImages() {
  return ( 
  <Container>
    <img src={background} alt="background"/>
    </Container>
  );
}

const Container = styled.div`
 height : 100vh;
 width : 100vw;
 img{
    height : 100vh;
    width : 100vw;
 }
`;