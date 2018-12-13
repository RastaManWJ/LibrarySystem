import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import App from '../App';
import Browse from '../components/Browse';
import Add from '../components/Add';
import Delete from '../components/Delete';
import Modify from '../components/Modify';

const NotFoundPage = () => (
    <div>
        404: Page not found! - <Link to="/">Go Home, you are drunk!</Link>
    </div>
);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <App />
            <Switch>
                <Route path="/" exact={true}/>
                <Route path="/Browse" component={Browse} exact={true} />
                <Route path="/Add" component={Add} exact={true} />
                <Route path="/Delete" component={Delete} exact={true} />
                <Route path="/Modify" component={Modify} exact={true} />

                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;