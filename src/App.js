import './App.css';
import PrimaryBall from './components/PrimaryBall'
import {setDarkMode, setLightMode} from './store/action'
import { useDispatch } from 'react-redux'

function App() {

  const dispach = useDispatch();

  return (
    <div className="App">
      <div className="info-wrapper">
        <h1>Esercizio 1</h1>
        <strong> Premi un pulsante per cambiare tema: </strong>
        <div className="button-container">
          <button type="button" id="darkBtn" onClick={()=>dispach(setDarkMode())}>Dark Mode</button>
          <button type="button" id="lightBtn" onClick={()=>dispach(setLightMode())}>Light Mode</button>
        </div>
      </div>
      <div className="ball-container">
        <PrimaryBall />
      </div>
    </div>
  );
}

export default App;
