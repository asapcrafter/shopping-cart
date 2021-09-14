import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Shop from './components/Shop';
import Header from './components/Header';
import Home from './components/Home';
import Bottom from './components/Bottom';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

//Using 'process.env.PUBLIC_URL' allows for proper redirection on Gh-pages
const Routes = () => {
    return (
        <BrowserRouter>
            <Auth0ProviderWithHistory>
                <ScrollToTop />
                <Header />
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
                    <Route exact path={process.env.PUBLIC_URL + "/shop"} component={Shop} />
                    <Route exact path={process.env.PUBLIC_URL + "/about"} component={About} />
                </Switch>
                <Bottom />
            </Auth0ProviderWithHistory>
        </BrowserRouter>
    );
}

export default Routes;

