import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 33px 45px;
  @media (max-width: 2000px) {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  /* border: 1px solid blue; */
  margin-right: 30px;
  @media (max-width: 1050px) {
      margin-top: 20px;
      /* margin-bottom: 40px; */
      
    height: 100px;
  }
`;
