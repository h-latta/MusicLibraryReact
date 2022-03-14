
const MusicTable = (props) => {

    return ( 
        <div className='container'>
            <h2>Hello!</h2>
            <table className='table table-striped'>
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