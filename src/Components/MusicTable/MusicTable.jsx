
const MusicTable = (props) => {

    return ( 
        <div className='container' style={{marginLeft: '5rem', marginRight: '5rem', marginTop: '3rem'}}>
            <h2>Song List</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                {props.songList.map(song => {
                    return (
                        <tr key = {song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>                           
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
     );
}
 
export default MusicTable;