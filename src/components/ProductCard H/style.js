import styled from "styled-components";
import { ReactComponent as save } from "../../assets/icons/save.svg";
import { ReactComponent as clock } from "../../assets/icons/clock.svg";
import { ReactComponent as user } from "../../assets/icons/user.svg";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  width: 100%;
  min-height: 400px;
  max-height: fit-content;
  padding: 0 20px 20px 20px;
  margin-bottom: 8px;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
  :hover {
    background: #ffffff;
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
    border-radius: 6px;
    transition: all 0.2s;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => flex && "column"};
  width: 100%;
  padding-bottom: ${({ last }) => !last && "25px"};
  padding-top: 25px;
  border-bottom: ${({ last }) => !last && "1px solid #d9d9d9"};
`;
export const Info = styled.div`
  display: flex;
  margin-left: ${({ end }) => end && "auto"};
  align-items: ${({ end }) => end && "center"};
`;

Info.OrderID = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  max-width: fit-content;
  height: 36px;
  background: #20d472;
  border-radius: 18px;
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.466667px;
  color: white;
  margin-right: 13px;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #edeff3;
  border-radius: 18px;
`;

Info.Save = styled(save)`
  width: 14px;
  height: 16px;
  background: #edeff3;
`;
Info.Clock = styled(clock)`
  display: flex;
  margin-right: 10px;
  width: 24px;
  height: 24px;
`;
Info.Text = styled.div`
  font-family: SFProDisplay;
  font-size: 18px;
  line-height: 16px;
  color: #2d3a45;
`;
Info.User = styled(user)`
  width: 24px;
  height: 24px;
  margin-right: 22px;
`;
export const Timer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;
Info.Name = styled.div`
  font-family: SFProDisplay;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.533333px;
  color: #2d3a45;
`;
Info.Number = styled.div`
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.7;
  margin: 5px 0 20px 0;
`;
Info.Total = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.366667px;
  color: #8d9ba8;
  margin-top: ${({ top }) => top && "20px"};
  margin-bottom: 4px;
`;
Info.Price = styled.div`
  font-family: SFProDisplay bold;
  font-size: 24px;
  line-height: 18px;
  letter-spacing: 0.666667px;
  color: #2d3a45;
`;
Info.PaymeIcon = styled.div`
  display: flex;
  margin-left: auto;
  width: 14px;
  height: 14px;
  background: #14e5e4;
  border-radius: 50%;
`;
Info.Payme = styled.div`
  margin-left: 12px;

  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;
