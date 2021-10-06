import React from 'react'
import './style'
import Sidebar from '../components/Sidebar';
import { Body, Container,  } from './style';
import { BrowserRouter as  Router} from 'react-router-dom';
export const Root = () => {
    return (

        <Container>
<Router>
       <Sidebar/>
            <Body>Im body</Body>
        </Router>
        </Container>
    )
}
export default Root;