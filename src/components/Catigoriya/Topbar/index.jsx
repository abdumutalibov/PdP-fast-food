import React from 'react'
import { Container } from './style';

export const Topbar = () => {
    return (
        <Container>
            
            <Container.Wrapper first>Kategoriya (UZ)</Container.Wrapper>
            <Container.Wrapper>Kategoriya (Ru) </Container.Wrapper>
            <Container.Wrapper>Bosh kategoriya</Container.Wrapper>
            <Container.Wrapper>ACTION</Container.Wrapper>
        </Container>
    )
}
export default Topbar;