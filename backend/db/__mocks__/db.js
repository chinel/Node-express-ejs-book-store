const connect = async () => {
  console.log("Mocked database connection");
};

const disconnect = async () => {
  console.log("Mocked database disconnect");
};

const findUser = async (obj) => {
  return Promise.resolve({
    firstName: "Nel",
    lastName: "Kal",
    email: "nelokwaz@gmail.com",
    password: "123456",
    address: "123 Main street",
    state: "Lagos",
    city: "Surulere",
    zipCode: "100001",
  });
};

const saveUser = async (newUser) => {
  return Promise.resolve({
    firstName: "Nel",
    lastName: "Kal",
    email: "nelokwaz@gmail.com",
    password: "123456",
    address: "123 Main street",
    state: "Lagos",
    city: "Surulere",
    zipCode: "100001",
  });
};

module.exports = {
  connect,
  disconnect,
  findUser,
  saveUser,
};
