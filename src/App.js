import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Rockets from './components/Rockets';
import RocketInfo from './components/RocketInfo';
import Capsules from './components/Capsules';
import Search from './components/Search';
function App() {
  return (
    <div className="App">
      
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/rockets" element={<Rockets />} />
    <Route exact path="/capsules" element={<Capsules />} />
    <Route exact path="/rockets/:rocket_id" element={<RocketInfo />} />
    <Route path="/search/:rocket_name" element={<Search/>}/>
    
</Routes>    
</div>


   
  );
}

export default App;
