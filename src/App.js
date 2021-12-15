import './App.css';
import NavBar from "./components/NavBar";
import Infofield from "./components/Infofield";
import Graph from "./components/Graph";
import SettingMenu from "./components/SettingMenu";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <body className='App-header'>
      <Graph/>
      <SettingMenu/>
      <Infofield/>
      
      </body>
      
    </div>
  );
}

export default App;
