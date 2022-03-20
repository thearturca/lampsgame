import GameComponent from './components/game.component';
import "./App.css"
import { useLocalStorage } from 'usehooks-ts';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const switchTheme = (theme: string) => {
    setTheme(theme)
  }

  return (
    <div className="App" data-theme={ theme }>
      <Routes>
        <Route path="/" element={ <GameComponent switchTheme={ switchTheme }/> }> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
