import React from 'react'
import { Container, Plus, Title, Wrapper } from './style'

const Navbar = () => {
    return (

        <Container>
            <Wrapper align>
                <Plus/>
                <Title>Yangi buyurma qo'shish</Title>
            </Wrapper>
            <Wrapper></Wrapper>
            <Wrapper align></Wrapper>
        </Container>
    )
}

export default Navbar
