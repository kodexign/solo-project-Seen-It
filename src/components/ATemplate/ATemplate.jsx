//update status to complete
const handleComplete = (movie) => {
    const mediaId = movie.id;
    console.log ('logging mediaId:', mediaId);
    dispatch({ type: 'UPDATE_STATUS_TO_COMPLETED', payload: {id: mediaId}});
    console.log ('handleComplete successful');
  
  };
  
  //update status to  to watch
  const handleToWatch = (movie) => {
    const mediaId = movie.id;
    console.log ('logging mediaId:', mediaId);
    dispatch({ type: 'UPDATE_STATUS_TO_WATCH', payload: {id: mediaId}});
    console.log ('handleComplete successful');
  
  };
  //update status to did not finish
  const handleDNF = (movie) => {
    const mediaId = movie.id;
    console.log ('logging mediaId:', mediaId);
    dispatch({ type: 'UPDATE_STATUS_TO_DNF', payload: {id: mediaId}});
    console.log ('handleComplete successful');
  
  };
  //update status to currently watching
  const handleCurrentlyWatching = (movie) => {
    const mediaId = movie.id;
    console.log ('logging mediaId:', mediaId);
    dispatch({ type: 'UPDATE_STATUS_TO_CURRENTLY_WATCHING', payload: {id: mediaId}});
    console.log ('handleComplete successful');
  
  };
  
  
  //delete media from database
  const handleDelete = (movie) =>{
    const mediaId = movie.id;
    console.log ('logging mediaId:', mediaId);
    dispatch({ type:'DELETE_MEDIA',  payload: {id: mediaId}});
    console.log ('handleDelete Successful, deleted :', mediaId, movie.title);
  }
  
  return (
    <main>
    <div className="container">
      <div>
        <h2>Currently Watching Movies List</h2>
      </div>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <p value={movie.id}>{movie.title}</p>
              <div className='statusChangeButtons'>
                <button className="deleteButton" onClick={() => handleDelete(movie)}> Delete </button>
                <button className="toWatchButton" onClick={() => handleToWatch(movie)}> To Watch</button>
                <button className="completedButton" onClick={() => handleComplete(movie)}> Completed </button>
                <button className="currentlyButton" onClick={() => handleCurrentlyWatching(movie)}> Currently Watching</button>
                <button className="dnfButton" onClick={() => handleDNF(movie)}> DNF </button>
                </div>
            </div>
          );
        })}
      </section>