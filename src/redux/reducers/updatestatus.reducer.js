


const updateStatusReducer = (state = [], action) => {
    switch (action.type) {
    case 'SET_STATUS_COMPLETED':
        return action.payload;
    case 'SET_STATUS_CURRENTLY_WATCHING':
        return action.payload;
    case 'SET_STATUS_TO_WATCH':
        return action.payload;
    case 'SET_STATUS_DNF':
        return action.payload;
    case 'SET_DELETE_MEDIA':
        return action.payload;
    default:
        return state;
    } 
  };
  
  // user will be on the redux state at:
  // state.user
  export default updateStatusReducer;