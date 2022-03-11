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
            <div className="form-group">
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
            </div>
            <button type='submit' className='btn btn-primary'>SEND</button>
        </form>
     );
}
 
export default MusicForm;