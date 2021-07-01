import { useState } from 'react';
import './App.css';
import AlbumList from './components/AlbumList';
import NavBar from "./components/Navbar"

function App() {

  const [searchText, setSearchText] = useState("")
  const [trackList, setTrackList] = useState([]);


  const getArtistList  = (tracks:any,searchText:any) => {
    setTrackList(tracks)
    setSearchText(searchText);

  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar getTrackList={(tracks:any) => getArtistList(tracks.tracks,tracks.searchText)}/>
        <AlbumList trackList={trackList} searchText={searchText}/>
      </header>
    </div>
  );
}


export default App;
