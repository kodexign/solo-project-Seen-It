import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddNewMediaForm() {
    const [selectMedia, setSelectMedia]= useState('select');

    const mediaCheck = (event) => {
        setSelectMedia(event.target.value);
    };

    return (
        <form className="formPanel">
            <h2>Add New Media Form</h2>
            {/* {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )} */}
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
                        required
                    />
                </label>
                <label htmlFor="numOfEps">
                    <input
                        type="text"
                        name="numOfEps"
                        placeholder='Num of Eps in Season'
                        required
                    />
                </label>
            </div>
            )}
            <div>
                <label htmlFor="platform">
                    <input
                        type="text"
                        name="password"
                        placeholder='platform: where are you watching it'

                    />
                </label>
            </div>
            <div>
                <select className='statusList'>
                    <option> Courrently Watching </option>
                    <option> Completed</option>
                    <option> To Watch </option>
                    <option> Did Not Finish</option>
                </select>

            </div>
            <div>
                <input className="btn" type="submit" name="submit" value="Add New" />
            </div>
        </form>
    );
}


export default AddNewMediaForm;