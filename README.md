# Live demo: [Shopping Landing Page](https://asapcrafter.github.io/shopping-cart/)
A landing page for a mock beauty company.

### Description
This website was made using React. The React 'router' hook was implemented to add multiple pages to the application. The login option also uses Auth0 as the main authentication service. 

### React Router
The router hook switches between the different page directories. The Browser history hook also keeps track of the user's page history.
``` javascript
//Using 'process.env.PUBLIC_URL' allows for proper redirection on Gh-pages
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Auth0ProviderWithHistory>
                <ScrollToTop />
                <Header />
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + "/"} component={Home}/>
                    <Route exact path={process.env.PUBLIC_URL + "/shop"} component={Shop}/>
                    <Route exact path={process.env.PUBLIC_URL+"/about"} component={About}/>
                </Switch>
                <Bottom />
            </Auth0ProviderWithHistory>
        </BrowserRouter>
    );
}
```
### Auth0 Authentication
The application features a Auth0 login option. There is currently no private site data that would require authentication but this serves as a practice on how to use the Auth0 service.
``` javascript
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const {loginWithRedirect}  = useAuth0();

  return (
    <div
      className="nav-item"
      onClick={loginWithRedirect}
    >
      LOGIN
    </div>
  );
};

export default LoginButton;
```
``` javascript
import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
```
### Custom SASS Styling
All of the website styling was done from scratch without the use of other styling libraries such as bootstrap. 
``` css
@function rem($value) {
  @return ($value / 16) * 1rem;
}

/* CSS Reset */
*, *::before, *::after { 
    margin: 0;
    padding: 0;
    // box-sizing: inherit;
    box-sizing: border-box;
}
.promo-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 1 0 67%;
    align-items: center;
    .promo-item {
        display: flex;
        flex-flow: column ;
        align-items: center;
        width: 280px;
        margin-left: 20px;
        margin-right: 20px;
        .promo-img {
            width: 100%;
            height: 280px;
            object-position: center;
        }
        .promo-text {
            width: 240px;
            height: 128px;
            margin-top: 25px;
            font-family: freight-light;
            letter-spacing: 1px;
            font-size: 18px;
            color: rgb(65, 65, 65);
            word-spacing: 1.2px;
            text-align: center;
            line-height: 23px;
        }
    }
}
```

