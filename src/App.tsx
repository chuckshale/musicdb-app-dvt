import './App.css';
import AlbumList from './components/AlbumList';
import NavBar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <AlbumList/>
      </header>
    </div>
  );
}

export default App;
