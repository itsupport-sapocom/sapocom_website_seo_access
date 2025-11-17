import { serialize, parse } from "cookie";
import jwt from "jsonwebtoken";
import { AdminModel } from "@/models/admin";

const TOKEN_NAME = process.env.TOKEN_AUTH || "token";
const SECRET = process.env.JWT_SECRET || "secret";

export function setTokenCookie(res, token) {
  const cookie = serialize(TOKEN_NAME, token, {
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600,
    // httpOnly: true,
    httpOnly: false,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);
}

export function removeTokenCookie(res) {
  const cookie = serialize(TOKEN_NAME, "", {
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);
}

export function getTokenCookie(req) {
  const cookies = parse(req.headers.cookie || "");
  return cookies[TOKEN_NAME];
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

export function getUserFromToken(token) {
  const decodedToken = jwt.decode(token, { complete: true });

  if (decodedToken && decodedToken.payload) {
    return decodedToken.payload;
  }

  return null;
}
//returns user if authenticated, otherwise returns false
export async function protectRoute(req, res) {
  try {
    const token = getTokenCookie(req);

    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
      return false;
    }

    const decodedToken = verifyToken(token);

    if (!decodedToken) {
      res.status(401).json({ message: "Unauthorized" });
      return false;
    }

    const user = await AdminModel.findById(decodedToken.userId);

    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return false;
    }

    return user;
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}
