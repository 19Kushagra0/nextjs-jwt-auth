import jwt from "jsonwebtoken";

// 🔹 creates a JWT
// payload should contain ONLY identity for now (email / username / userId)
export function signToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}

// 🔹 verifies JWT validity
// returns decoded payload if valid
// returns null if expired or invalid
export function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}
