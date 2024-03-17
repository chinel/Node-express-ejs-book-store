const { loginUser, registerUser } = require("./userService");
jest.mock("./userService.js"); // remove this line, if you do not want to use mock
describe("Test Service calls backend", () => {
  const uuid = Math.random().toString(36).slice(2);
  const user = {
    firstName: "Nel",
    lastName: "Kal",
    email: `nelokwaz+new${uuid}@gmail.com`,
    password: "123456",
    address: "123 Main street",
    state: "Lagos",
    city: "Surulere",
    zipCode: "100001",
  };
  test("Register user should return a user", async () => {
    let result;

    result = await registerUser(user);

    expect(result.data.message).toEqual("Successful Registration");
    expect(result.data.user.firstName).toEqual(user.firstName);
    expect(result.data.user.lastName).toEqual(user.lastName);
    expect(result.data.user.email).toEqual(user.email);
    expect(result.data.user.address).toEqual(user.address);
    expect(result.data.user.state).toEqual(user.state);
    expect(result.data.user.city).toEqual(user.city);
    expect(result.data.user.zipCode).toEqual(user.zipCode);
  });

  test("Login user should return a user", async () => {
    let result;

    result = await loginUser(user);

    expect(result.data.message).toEqual("Login Successful");
    expect(result.data.user.firstName).toEqual(user.firstName);
    expect(result.data.user.lastName).toEqual(user.lastName);
    expect(result.data.user.email).toEqual(user.email);
    expect(result.data.user.address).toEqual(user.address);
    expect(result.data.user.state).toEqual(user.state);
    expect(result.data.user.city).toEqual(user.city);
    expect(result.data.user.zipCode).toEqual(user.zipCode);
    expect(result.data.loggedIn).toBe(true);
  });
});
