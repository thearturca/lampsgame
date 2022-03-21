import GameComponent from './components/game.component';
import "./App.css"
import { useLocalStorage } from 'usehooks-ts';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const switchTheme = (theme: string) => {
    setTheme(theme)
  }

  useEffect(() => {
    document.getElementById("webPage")?.setAttribute("data-theme", theme)
  },[theme])

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={ <GameComponent switchTheme={ switchTheme }/> }> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
