import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import Contact from './pages/Contact';
import SignIn_page from './pages/SigninPage';

function Routes(){
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/details/:type/:id" exact component={Details} />
                <Route path="/Contact" exact component={Contact} />
                <Route path="/Signin" exact component={SignIn_page} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;