import GameComponent from './components/game.component';
import "./App.css"
import { useLocalStorage } from 'usehooks-ts';

function App() {

  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const switchTheme = (theme: string) => {
    setTheme(theme)
  }

  return (
    <div className="App" data-theme={theme}>
      <h1>Lamp Game</h1>
      <GameComponent switchTheme={switchTheme}></GameComponent>
    </div>
  );
}

export default App;
