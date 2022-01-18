import React from 'react'
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
            </Wrapper>
        </Container>
    )
}
export default Navbar;