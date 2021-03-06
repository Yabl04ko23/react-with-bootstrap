const user = {
  name: "Olexiy",
  email: "aloshanizi23@gmail.com",
  avatar: "#",
};

const delay = 400;

const fetchUser = () => {
  return new Promise((response, reject) => {
    return setTimeout(() => {
      response(user);
    }, delay);
  });
};

export default { fetchUser };
