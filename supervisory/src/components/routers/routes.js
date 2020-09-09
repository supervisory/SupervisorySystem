import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Auth, { isAuthenticated } from '../auth/Auth'
import LoadBlock from '../loadBlocks/LoadBlock'
import FirstChart from '../charts/firstChart/FirstChart'
import SecondChart from '../charts/secondChart/SecondChart'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: '/login', state: { from: props.location }}} />
            )
        }
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={() => <Auth />} />
            {/* <Redirect from="*" to="/" /> */}
            <PrivateRoute path='/app' component={() => <LoadBlock />} />
            <PrivateRoute path='/firstChart' component={() => <FirstChart />} />
            <PrivateRoute path='/secondChart' component={() => <SecondChart />} />
        </Switch>
    </BrowserRouter>
)

export default Routes