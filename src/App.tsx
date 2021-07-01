import { useState } from 'react';
import './App.css';
import AlbumList from './components/AlbumList';
import NavBar from "./components/Navbar"

function App() {

  const initialState = {
    tracks : []
  }

  const [state, setstate] = useState(initialState)
  const [trackList, setTrackList] = useState([]);


  const getArtistList  = (tracks:any) => {
    setTrackList(tracks)

  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar getTrackList={(tracks:any) => getArtistList(tracks.tracks)}/>
        <AlbumList trackList={trackList}/>
      </header>
    </div>
  );
}

export default App;
