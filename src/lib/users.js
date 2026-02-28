// export const users = [
//   {
//     id: 1,
//     email: "a",
//     password: "a",
//   },
//   {
//     id: 2,
//     email: "b",
//     password: "b",
//   },
// ];

export const users = [];

export const addUser = (email, password) => {
  users.push({ email, password });
};

export const findUser = (email) => {
  return users.find((user) => user.email === email);
};
