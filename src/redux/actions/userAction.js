export const userAction = function (user) {
  return {
    type: "ADD_USER",
    payload: user,
  };
};
