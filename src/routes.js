import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './public/Home';
import Marketplace from './private/Marketplace';



const Routes = () => {

    function PrivateRoute({children, ...rest}){

        return (

            <Route {...rest} render={() => {
                return localStorage.getItem('wallet')
                ? children
                : <Redirect to='/' />
            }}>

            </Route>
        )
    }

    return (
        <>
        
        <BrowserRouter>
        
            <Route path="/" exact>
                <Home />
            </Route>
            <PrivateRoute path='/marketplace' exact>
                <Marketplace />
            </PrivateRoute>
        
        
        </BrowserRouter>


        </>
    )


}

export default Routes