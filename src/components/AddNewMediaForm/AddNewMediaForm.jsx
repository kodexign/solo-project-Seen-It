import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './AddNewMediaForm.css';

function AddNewMediaForm() {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [movie, setMovie] = useState('select');
    const [seasonNum, setSeasonNum] = useState('');
    const [numOfEps, setNumOfEps] = useState('');
    const [platform, setPlatform] = useState('');
    const [status, setStatus] = useState('select');
    
    const statuses = useSelector((store) => store.getStatusesReducer); 
    console.log ('statuses array:',statuses);

    //automatically populate status in status drop down
    useEffect(() => {
        dispatch({ type: 'FETCH_STATUSES' });
    }, []);

    //checks media type, if TV Show, will render seasonNum and numOfEps input field
    const mediaCheck = (event) => {
            if (event.target.value === 'false') {
              setMovie(false); // TV Show
            } else if (event.target.value === 'true') {
              setMovie(true); // Movie
            } else {
              setMovie('select'); // Default option or any other value
            }
        console.log('mediaCheck', event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${title} has been successfully added!`)
    
        const newMedia = {
        title: title,
        movie: movie,
        seasonNum: seasonNum,
        numOfEps: numOfEps,
        platform: platform,
        status: status,

    }
        dispatch({ type: 'ADD_NEW', payload: newMedia});
        
        setTitle('');
        setMovie('select');
        setSeasonNum('');
        setNumOfEps('');
        setPlatform('');
        setStatus('select'); // clears input form

        console.log('MEDIA ADDED SUCCESSFULLY', newMedia)
    };
    


    return (
        
        <form className="formPanel" onSubmit={handleSubmit}>
            {/* <div className='add-clapper'>clapper decor div</div> */}
            
            <div>
                <h2>Add New Media Form</h2>
                <label htmlFor="title">
                Title:
                <br/>
                    <input
                        type="text"
                        name="title"
                        placeholder='Title'
                        required
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor='mediaType'>
                Movie or TV Show
                <br/>
                <select className='mediaType' onChange ={mediaCheck}>
                    <option value="select"> --Select One -- </option>
                    <option value={false}> TV Show</option>
                    <option value={true}> Movie </option>
                </select>
                </label>
            </div>
            <br />
            {movie === false && (
            <div id = "tvShowDetails">
                <label htmlFor="seasonNum">
                Season Number:
                <br/>
                    <input
                        type="text"
                        name="seasonNumber"
                        placeholder='Season Number'
                        value={seasonNum}
                        onChange={(event) => setSeasonNum(event.target.value)}

                    />
                </label>
                <br />
                <label htmlFor="numOfEps">
                Number of Episodes
                <br/>
                    <input
                        type= 'number'
                        name="numOfEps"
                        placeholder='Num of Eps in Season'
                        value={numOfEps}
                        onChange={(event) => setNumOfEps(event.target.value)}
                    />
                </label>
            </div>
            )}
            <div>
                <label htmlFor="platform">
                    Platform:
                    <br/>
                    <input
                        type="text"
                        name="platform"
                        placeholder='platform: where?'
                        value={platform}
                        onChange={(event) => setPlatform(event.target.value)}
                    />
                </label>
            </div>
            <div>
            Status:
            <br />
                <select className='statusList' onChange ={(event) => setStatus (event.target.value)} >
                <option value="select">---SELECT STATUS---</option>
                    {statuses.map(status => {
                        return(
                            <option key={status.id} value ={status.id}> {status.type}</option>
                        );          
                    })}
                 </select>   

            </div>
            <div>
                <br />
                <input className="btn" type="submit" name="submit" value="Add New" />
            </div>
        </form>
    );
}


export default AddNewMediaForm;