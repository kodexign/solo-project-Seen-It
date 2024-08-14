import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function AddNewMediaForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [movie, setMovie] = useState(true);
    const [seasonNum, setSeasonNum] = useState(null);
    const [numOfEps, setNumOfEps] = useState(null);
    const [platform, setPlatform] = useState('');
    const [status, setStatus] = useState('');

    
    
    const statuses = useSelector((store) => store.getStatusesReducer); 
    console.log ('statuses array:',statuses);
//automatically populate status in status drop down
    useEffect(() => {
        dispatch({ type: 'FETCH_STATUSES' }); //from rootSaga
      }, []);

    //checks media type, if TV Show, will render seasonNum and numOfEps input field
    const [selectMedia, setSelectMedia]= useState(''); //used with rendering additional TV Show input fields
    const mediaCheck = (event) => {
        setSelectMedia(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
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
        setMovie(true);
        setSeasonNum(null);
        setNumOfEps(null);
        setPlatform('');
        setStatus(''); // clears input form
    };
    


    return (
        <form className="formPanel" onSubmit={handleSubmit}>
            <h2>Add New Media Form</h2>
            <div>
                <label htmlFor="title">
                    <input
                        type="text"
                        name="title"
                        placeholder='Title'
                        required
                    />
                </label>
            </div>
            <div>
                <label htmlFor='mediaType'>
                <select className='mediaType' onChange ={mediaCheck}>
                    <option value="select"> --Select One -- </option>
                    <option value="tvShow"> TV Show</option>
                    <option value="movie"> Movie </option>
                </select>
                </label>
            </div>
            {selectMedia === 'tvShow' && (
            <div id = "tvShowDetails">
                <label htmlFor="seasonNum">
                    <input
                        type="text"
                        name="seasonNumber"
                        placeholder='Season Number'

                    />
                </label>
                <label htmlFor="numOfEps">
                    <input
                        type="text"
                        name="numOfEps"
                        placeholder='Num of Eps in Season'
                       
                    />
                </label>
            </div>
            )}
            <div>
                <label htmlFor="platform">
                    <input
                        type="text"
                        name="platform"
                        placeholder='platform: where?'

                    />
                </label>
            </div>
            <div>
                <select className='statusList' >
                    {statuses.map(status => {
                        return(
                            <option key={status.id}> {status.type}</option>
                        );          
                    })}
                 </select>   

            </div>
            <div>
                <input className="btn" type="submit" name="submit" value="Add New" />
            </div>
        </form>
    );
}


export default AddNewMediaForm;