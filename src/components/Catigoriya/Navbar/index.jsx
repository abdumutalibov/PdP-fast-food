import React from 'react'
import Menu from '../Menu';
import { Container, Plus, Title, Wrapper,Tab,Input,Search } from './style';


export const Navbar = () => {
    return (
        <Container >
            <Wrapper align>
              <Plus/>
              <Title>
              Yangi buyurma <br />
          qo'shish
              </Title>
            </Wrapper>   
             <Wrapper>
          <Tab>
              <Input placeholder="Qidirish"></Input>
<Search/>
          </Tab>
            {/* <Menu/> */}
            </Wrapper>
        </Container>
    )
}
export default Navbar;