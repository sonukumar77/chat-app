const INITIAL_STATE = {
  users: [],
  chats: [],
};
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state.users, action.payload];

    default:
      return state;
  }
};
