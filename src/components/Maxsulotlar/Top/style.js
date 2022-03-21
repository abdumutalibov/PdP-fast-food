import styled from "styled-components";

export const Topbar = styled.div`
  display: flex;
  height: 36px;
  background: white;
  align-items: center;
  justify-content:space-between;
  `;
Topbar.Item = styled.div`
width: 100%;
  /* margin: 0 166px 0 56px; */
  margin-right: 20px;
  border-left: ${({first}) => (!first && '1px solid #d9d9d9')} ;
  padding-left: 15px;
  `;


export const Item = styled.div`

/* display: flex;
height: 60px;
width: 100%;
background: white;
align-items: center;
justify-content:space-around;
margin:30px 0 -10px 20px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 6px;
:hover{
  box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
} */
`;