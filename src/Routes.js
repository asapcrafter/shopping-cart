import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Shop from './components/Shop';
import Header from './components/Header';
import Home from './components/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shop" component={Shop} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
