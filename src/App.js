import { BrowserRouter } from 'react-router-dom';
import AppContainer from './components/AppContainer/AppContainer';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  );
};

export default App;
