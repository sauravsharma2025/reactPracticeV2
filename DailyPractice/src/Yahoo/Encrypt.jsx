import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
export const Encrypt = ({ password }) => {
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};
