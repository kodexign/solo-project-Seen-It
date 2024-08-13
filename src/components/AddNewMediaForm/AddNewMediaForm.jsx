import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function AddNewMediaForm() {
    const dispatch = useDispatch();
    const [addNewMedia, setAddNewMedia] = useState(''); 
    const [selectMedia, setSelectMedia]= useState(''); //used with rendering additional TV Show input fields
    
    const [formData, setFormData] = useState({
        title: '',
        movie: true,
        seasonNum: '',
        numOfEps: '',
        platform: '',
        status: '',
      }); //have a feeling i might need this, but if i'm using SAGA do I need it still?
    

    const newMedia = useSelector ((store) => store.addNewReducer); 

    //checks media type, if TV Show, will render seasonNum and numOfEps input field
    const mediaCheck = (event) => {
        setSelectMedia(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_NEW_MEDIA' });
        setAddNewMedia('');
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
                        placeholder='platform: where are you watching it'

                    />
                </label>
            </div>
            <div>
                <select className='statusList'>
                    <option> currently watching </option>
                    <option> completed</option>
                    <option> to watch </option>
                    <option> did not finish</option>
                </select>

            </div>
            <div>
                <input className="btn" type="submit" name="submit" value="Add New" />
            </div>
        </form>
    );
}


export default AddNewMediaForm;