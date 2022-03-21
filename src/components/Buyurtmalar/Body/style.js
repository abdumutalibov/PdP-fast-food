import styled from "styled-components";

export const Container = styled.div`
  display: flex;
<<<<<<< HEAD
`;
export const Wrapper = styled.div`
  display: flex;
  height: 80px;
  padding: 22px 40px;
  align-items: center;
  background: white;
  width: ${({ align }) => (align ? "300px" : "100%")};
  border: 2px solid #e5e5e5;
=======
  flex-direction: column;
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
>>>>>>> a527c1d6db56355461f13b35df2753527a0c239d
`;
