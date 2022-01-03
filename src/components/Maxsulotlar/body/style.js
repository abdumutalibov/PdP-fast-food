import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Topbar = styled.div`
  display: flex;
  height: 36px;
  width: 100%;
  background: white;
  align-items: center;
  justify-content:space-around;
  `;
Topbar.Item = styled.div`
  /* margin: 0 166px 0 56px; */
  border-left: ${({first}) => (!first && '1px solid #d9d9d9')} ;
  padding-left: 15px;
  `;


export const Item = styled.div`

display: flex;
height: 60px;
/* width: 100%; */
/* background: white; */
align-items: center;
justify-content:space-between;
padding-left: 20px;
margin:30px 10px -10px 10px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 6px;
:hover{
  box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
}
`;
Item.Text = styled.div`
display: flex;
 margin-right: ${({last}) => (last && '20px')};
  align-items:center;
`
Item.Img =styled.img`
margin-right:10px;
width:50px;
height: 50px;
border-radius:50%;
`