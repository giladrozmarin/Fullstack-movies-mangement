 import {Login,Menu} from './pages'
 import { BrowserRouter as Router, Switch } from 'react-router-dom';
 import * as ROUTES from './constants/routes';
 import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
 import  useAuthListener  from './hooks/auth-listener';

 function App() {
  const { user } = useAuthListener();
  return (

    <Router>
    <Switch>
    <IsUserRedirect user={user} loggedInPath={ROUTES.LOGIN} path={ROUTES.LOGIN}>
                <Login />
    </IsUserRedirect>
    <IsUserRedirect user={user} loggedInPath={ROUTES.LOGIN} path={ROUTES.LOGIN}>
                <Menu />
    </IsUserRedirect>

    </Switch>
    </Router>
   

  );
}

export default App;
