import styled from "styled-components"

export const Container = styled.div`

display: flex;
flex-direction: column;
width: 300px;
height:100vh;
padding:28px 0 40px 0;
background:white;
`;

export const LogoWrapper = styled.div`
padding: 0 24px;
display:flex;
margin-bottom:64px;
height:100px;
align-items:center;
`;
LogoWrapper.Img=styled.img`
width:70px;
height: 70px;
border-radius: 50%;
margin-right: 20px;
`;
export const Text =styled.div`
display: flex;
flex-direction: column;
`;

LogoWrapper.Title = styled.div`

font-family: SFProDisplay;
font-size:16px;
line-height: 19px;
color: #2d3a45;
`
Text.Title = styled.div`
  font-weight: 900;
  font-size: 18px;
  line-height: 19px;
  font-family: SFProDisplay bold;
  color: #2d3a45;
`;
Text.Desc=styled.div`
font-family: SFProDisplay;
font-size: 12px;
line-height: 14px;
color: #2D3A45;
mix-blend-mode: normal;
opacity: 0.5;
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;