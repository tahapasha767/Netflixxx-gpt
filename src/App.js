import logo from './logo.svg';
import './App.css';
import Body from './componenets/Body';
import Loader from './componenets/Loader'; // Assuming Loader component is created
import {Provider, useSelector} from "react-redux" // Added useSelector for accessing state
import appStore from './utilies/appStore';

function App() {
  // Select the isLoading state from the Redux store
  // Assuming a 'loader' slice exists in appStore with an 'isLoading' property
  const isLoading = useSelector((state) => state.loader.isLoading); 

  return (
    <Provider store={appStore}>   
       {/* Conditionally render the Loader component based on isLoading state */}
       {isLoading && <Loader />}
       <Body/>
    </Provider>
  );
}

export default App;