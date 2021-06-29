import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/chat'
        component={Chat} />
      <Route path='/login'
        component={Login} />
    </BrowserRouter>
  );
};

export default App;
