import './App.css';
import CharacterMakePage_left from './pages/characterMakePage_left';
import CharacterMakePage2 from './pages/characterMakePage_right';

function App() {
  return (
    <div className="App">
      <div>
        <CharacterMakePage_left />
      </div>
      {/* <div>
        <CharacterMakePage2 />
      </div> */}
    </div>
  );
}

export default App;