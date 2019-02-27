const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { User } = require("../../../models/user");

describe("user.generateAuthToken", () => {
  it("should return a valid JWT", () => {
    const payload = {
      _id: new mongoose.Types.ObjectId().toHexString(),
      isAdmin: true
    };
    const user = new User(payload);
    const token = user.generateAuthToken();
    const decoded = jwt.verify(token, process.env.EXPRESS_APP_JWT_PRIVATE_KEY);
    expect(decoded).toMatchObject(payload);
  });
});
