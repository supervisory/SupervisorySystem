import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Auth from './Auth'
import { isAuthenticated } from './Auth'

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
            <Route exact path='/login' component={() => <Auth />} />
            <PrivateRoute path='/app' component={() => <h1>Wellcome</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes