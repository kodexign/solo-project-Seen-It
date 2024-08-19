const threeRecentReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_THREE_RECENT':
        return  action.payload;
        default:
          return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default threeRecentReducer;