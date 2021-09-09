import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Shop from './components/Shop';
import Header from './components/Header';
import Home from './components/Home';

//Using 'process.env.PUBLIC_URL' allows for proper redirection on Gh-pages
const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
                <Route exact path={process.env.PUBLIC_URL + "/shop"} component={Shop} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;