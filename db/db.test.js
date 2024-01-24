const mongoose = require("mongoose");
const { connect, disconnect, findUser, saveUser } = require("./db");
const User = require("../models/userModel");

jest.mock("./db"); // you can remove this line if you do not want to mock the db and rename or remove the corresponding file name in the __mocks__ folder

beforeAll(async () => {
  return await connect();
});

describe("User Test Suite", () => {
  test("Save user to the database", async () => {
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: "Nel",
      lastName: "Kal",
      email: "nelokwaz@gmail.com",
      password: "123456",
      address: "123 Main street",
      state: "Lagos",
      city: "Surulere",
      zipCode: "100001",
    });

    const user = await saveUser(newUser);
    expect(user.firstName).toEqual("Nel");
    expect(user.lastName).toEqual("Kal");
    expect(user.email).toEqual("nelokwaz@gmail.com");
    expect(user.password).toEqual("123456");
    expect(user.address).toEqual("123 Main street");
    expect(user.state).toEqual("Lagos");
    expect(user.city).toEqual("Surulere");
    expect(user.zipCode).toEqual("100001");
  });

  test("Find user by any property", async () => {
    const obj = { firstName: "Nel", email: "nelokwaz@gmail.com" };
    const user = await findUser(obj);

    expect(user.firstName).toBe("Nel");
    expect(user.lastName).toEqual("Kal");
    expect(user.email).toEqual("nelokwaz@gmail.com");
    expect(user.password).toEqual("123456");
    expect(user.address).toEqual("123 Main street");
    expect(user.state).toEqual("Lagos");
    expect(user.city).toEqual("Surulere");
    expect(user.zipCode).toEqual("100001");
  });
});

afterAll(async () => {
  return await disconnect();
});
