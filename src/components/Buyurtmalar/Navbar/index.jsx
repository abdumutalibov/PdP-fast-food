import React, { useState } from "react";
import {
  Container,
  IconsWrapper,
  MenuH,
  MenuV,
  Plus,
  Tab,
  Title,
  Toggle,
  ToggleClone,
  Wrapper,
} from "./style";

const Navbar = (props) => {
  const [isActive, setIsActive] = useState("Yangi");
  const [isTabActive, setIsTabActive] = useState(true);

  return (
    <Container>
      <Wrapper align order="first">
        <Plus />
        <Title>Yangi buyurma qo'shish</Title>
        <ToggleClone>
          <IconsWrapper
            active={isTabActive}
            onClick={() => {
              setIsTabActive(true);
              props.onClick(true);
            }}
          >
            <MenuV active={isTabActive} />
          </IconsWrapper>
          <IconsWrapper
            active={!isTabActive}
            onClick={() => {
              setIsTabActive(false);
              props.onClick(false);
            }}
          >
            <MenuH active={!isTabActive} />
          </IconsWrapper>
        </ToggleClone>
      </Wrapper>
      <Wrapper order="second">
        <Tab active={isTabActive}>
          <Tab.Item
            onClick={() => {
              isTabActive && setIsActive("Yangi");
            }}
            active={isActive === "Yangi"}
          >
            Yangi
          </Tab.Item>
          <Tab.Item
            onClick={() => {
              isTabActive && setIsActive("Qabul qilgan");
            }}
            active={isActive === "Qabul qilgan"}
          >
            Qabul qilingan
          </Tab.Item>
          <Tab.Item
            onClick={() => {
              isTabActive && setIsActive("Jonatilgan");
            }}
            active={isActive === "Jonatilgan"}
          >
            Jonatilgan{" "}
          </Tab.Item>
          <Tab.Item
            onClick={() => {
              isTabActive && setIsActive("Yopilgan");
            }}
            active={isActive === "Yopilgan"}
          >
            Yopilgan
          </Tab.Item>
        </Tab>
      </Wrapper>
      <Wrapper align order="third">
        <Toggle>
          <IconsWrapper
            active={isTabActive}
            onClick={() => {
              setIsTabActive(true);
              props.onClick(true)
            }}
          >
            <MenuV active={isTabActive} />
          </IconsWrapper>
          <IconsWrapper
            active={!isTabActive}
            onClick={() => {
              setIsTabActive(false);
              props.onClick(false);
            }}
          >
            <MenuH active={!isTabActive} />
          </IconsWrapper>
        </Toggle>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
