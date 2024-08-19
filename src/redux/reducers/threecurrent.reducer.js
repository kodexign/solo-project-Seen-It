const threeCurrentReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_THREE_CURRENT':
        return  action.payload;
        default:
          return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default threeCurrentReducer;