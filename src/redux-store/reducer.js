

const initialState = {
    data: {} // The object to be stored
  };
  
   
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  export default rootReducer;