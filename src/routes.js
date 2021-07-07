import Chat from './components/Chat/Chat';
import SignIn from './components/SignIn/SignIn';
import { CHAT_ROUTE, LOGIN_ROUTE } from './extras/consts';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: SignIn
  }
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat
  }
];