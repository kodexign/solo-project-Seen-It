
const mediaReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MEDIA':
        return  action.payload;
      case 'CLEAR_MEDIA':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default mediaReducer;