const addNewReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_NEW_MEDIA':
        return action.payload;
      case 'FETCH_ALL_STATUSES':
        return action.payload;
      default:
        return { ...state};
    } 
  };
  
  // user will be on the redux state at:
  // state.user
  export default addNewReducer;