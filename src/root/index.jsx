import React from 'react'
import { Body, Container,  } from './style';
import Sidebar from '../components/Sidebar';
import { BrowserRouter as  Router ,Route,Switch} from 'react-router-dom';
import { sidebar } from '../utils/sidebar';
export const Root = () => {
    return (

        <Container>
<Router>
    <Switch>
       {sidebar.map(({id,path})=>(
           <Route key={id} path={path} component={Sidebar} />
       ))}
    </Switch>

    <Switch>
        {sidebar.map(({Component,id,
        path})=>(
            <Route exact key={id} path={path} component={Component}/>
        ))}
    </Switch>
            <Body>Im body</Body>
        </Router>
        </Container>
    )
}
export default Root;