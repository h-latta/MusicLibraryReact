import './App.css';
import React, { useState, useEffect } from 'react';
import MusicForm from './Components/MusicForm/MusicForm';
import MusicTable from './Components/MusicTable/MusicTable';
import NavBar from './Components/NavBar/NavBar';
import axios from 'axios';


function App() {
  const [song, setSong] = useState([])

  function addNewSong(entry){
    let tempSong = [...song, entry];
    setSong(tempSong);
  }

  useEffect(() => {
      getAllSongs();
  }, [setSong]);

  async function getAllSongs(){
      let response = await axios.get('http://127.0.0.1:8000/music/')
      setSong(response.data);
  };


  return (
    <div className='backimage'>
      <nav>
        <NavBar />
      </nav>
      <div>
        <MusicForm createSong={addNewSong}/>
      </div>
      <div>
        <MusicTable songList={song}/>
      </div>
    </div>
  );
}

export default App;
