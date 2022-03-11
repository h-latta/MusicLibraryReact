import React, { useState } from 'react';


const MusicForm = (props) => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [date, setDate] = useState('')
    const [genre, setGenre] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            date: date,
            genre: genre
        };
        console.log(newSong)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Add a song!</h2>
                    <label>Title</label>
                        <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
                    <label>Artist</label>
                        <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)} />
                    <label>Album</label>
                        <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)} />
                    <label>Release Date</label>
                        <input type='date' value={date} onChange={(event) => setDate(event.target.value)} />
                    <label>Genre</label>
                        <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)} />
            </div>
            <button type='submit' />
        </form>
     );
}
 
export default MusicForm;