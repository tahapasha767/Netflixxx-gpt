import logo from './logo.svg';
import './App.css';
import Body from './componenets/Body';
import {Provider} from "react-redux"
import appStore from './utilies/appStore';
function App() {
  return (
    <Provider store={appStore}>   
       <Body/>
    </Provider>

  );
}

export default App;
