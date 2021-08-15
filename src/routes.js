import React from 'react'

import Dashboard from './pages/Dashboard/Dashboard'

import {Switch , Route} from 'react-router-dom'

const ProtectedRoutes = ({userRoles}) => {

    let routes = []

    if (userRoles.includes('uidesigner')) {
       
        routes.push(
         <>
            <Route exact path='/dashboard' component={Dashboard}/>
        </> )
        
    }

    routes.push(
        <Route render={() => <h2>Not Found</h2>} />
    )

    return (
        <>
            <Switch>
                {routes.map(el =>
                el.props.children
                )}
            </Switch>
        </>
    )
}

const Routes = () => {
 
    let user = JSON.parse(localStorage.getItem('user')).roles

    return(
        <>
            <ProtectedRoutes
                userRoles = {user}
            />
        </>
    )
}

export default Routes