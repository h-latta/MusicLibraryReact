import React, { useState } from 'react';
import axios from 'axios';

const MusicForm = (props) => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [date, setDate] = useState('')
    const [genre, setGenre] = useState('')

    async function createSong(newSong){
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
        console.log(response.data)
    };

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: date,
            genre: genre
        };
        createSong(newSong);
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="form-group" style={{marginLeft: '6rem', marginRight: '6rem', marginTop: '3rem'}}>
                <h2>Add a song!</h2>
                    <label>Title</label>
                        <input type='text' className="form-control" value={title} onChange={(event) => setTitle(event.target.value)} />
                    <label>Artist</label>
                        <input type='text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)} />
                    <label>Album</label>
                        <input type='text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)} />
                    <label>Release Date</label>
                        <input type='date' className='form-control' value={date} onChange={(event) => setDate(event.target.value)} />
                    <label>Genre</label>
                        <input type='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)} />
            <button style={{marginTop: '.5rem'}} type='submit' className='btn btn-primary'>SEND</button>
            </div>
        </form>
     );
}
 
export default MusicForm;