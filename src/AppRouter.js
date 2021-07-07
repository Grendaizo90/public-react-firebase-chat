import { Route, Switch, Redirect } from 'react-router-dom';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { privateRoutes, publicRoutes } from './routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from './extras/consts';
import { useContext } from 'react';
import { Context } from './App';
import './App.css';


const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    user
      ? (
        <Switch>
          {privateRoutes.map(({ path, Component }) =>
            <Route
              key={path}
              path={path}
              component={Component}
              exact={true} />
          )}
          <Redirect to={CHAT_ROUTE} />
        </Switch>
      )
      : (
        <Switch>
          {publicRoutes.map(({ path, Component }) =>
            <Route
              key={path}
              path={path}
              component={Component}
              exact={true} />
          )}
          <Redirect to={LOGIN_ROUTE} />
        </Switch>
      )
  );
};

export default AppRouter;
