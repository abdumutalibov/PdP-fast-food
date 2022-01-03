export const reducer = (state, action) => {
  switch (action.type) {
    case "delete":
      console.log(action);
      let filtered = state.filter(
        (data) => data.id !== action.payload.id
      ); 
      return state, filtered;
    default:
      return state;
  }
};
