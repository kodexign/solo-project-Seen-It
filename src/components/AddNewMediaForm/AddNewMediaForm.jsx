import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddNewMediaForm() {
    // const dispatch = useDispatch();

  
    const [addNewMedia, setAddNewMedia] = useState('');
    const [selectMedia, setSelectMedia]= useState('select');
    // const newMedia = useSelector ((store) => store.addNewMedia); 

    const mediaCheck = (event) => {
        setSelectMedia(event.target.value);
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     setAddNewMedia('');
    // };

    const [formData, setFormData] = useState({
        title: '',
        movie: false,
        seasonNum: '',
        numOfEps: '',
        platform: '',
        status: '',
      });
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await   
     axios.post('/api/media/add-new', formData);
          console.log('Media added Successfully', response.data);
          // Handle success, e.g., clear form, show success message
          setFormData({
            title: '',
            movie: false,
            seasonNum: '',
            numOfEps: '',
            platform: '',
            status: '',
          });
        } catch (error) {
          console.error('Error adding media:', error);
          // Handle error, e.g., show error message
        }
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