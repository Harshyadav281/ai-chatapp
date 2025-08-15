// import userModel from "../model/user.model.js";
// import { createUserController } from "../controllers/user.controller.js";
// import e from "express";

// const createUser = async (email, password) => {
//   try {
//     if (!email || !password) {
//       throw new Error("Email and password are required");
//     }
//     const hashedPassword = await userModel.hashPassword(password);

//     const user = await userModel.create({ email, password: hashedPassword });
//     return user;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// export default {
//   createUser,
// };

import userModel from "../model/user.model.js";

// Create a new user
const createUser = async (email, password) => {
  try {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const hashedPassword = await userModel.hashPassword(password);
    const user = await userModel.create({ email, password: hashedPassword });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Find a user by email
const findUserByEmail = async (email) => {
  try {
    if (!email) {
      throw new Error("Email is required");
    }
    return await userModel.findOne({ email });
  } catch (error) {
    throw new Error(error.message);
  }
};

// ✅ Export both in the default object
export default {
  createUser,
  findUserByEmail,
};
