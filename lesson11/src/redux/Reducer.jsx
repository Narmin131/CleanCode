const initialState = localStorage.getItem("Blogs")
  ? JSON.parse(localStorage.getItem("Blogs"))
  : [];

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.payload];
    case "REMOVE_BLOG":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
