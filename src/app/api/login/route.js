import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { signToken } from "@/lib/auth";
import { users } from "@/lib/users";

export async function POST(request) {
  const { username, password } = await request.json();

  const user = users.find((user) => {
    return user.email === username && user.password === password;
  });

  console.log(user);

  if (!user) {
    return Response.json(
      { message: "Please provide correct username and password" },
      {
        status: 400,
      },
    );
  }

  //   jwt.sign(payload, secretOrPrivateKey, [options])
  // const token = jwt.sign({ username }, "secretOrPrivateKey", {
  //   expiresIn: "7d",
  // });

  // importing auth.js
  const token = signToken({ username, role: user.role });

  //   serialize(name, value, options) || (cookie template)
  const serialized = serialize("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  // there is also next js way to to do it
  // in this way you dont have to return cookie in respose
  // but this can not be used in pyton, nodejs etc
  // const cookieStore = cookies();
  // await cookieStore.set("token", token, {
  //     httpOnly: true,
  //     secure: true,
  //     sameSite: "strict",
  //     maxAge: 60 * 60 * 24 * 7,
  //     path: "/",
  //   });

  // console.log(serialized);

  return Response.json(
    { message: "go it", role: user.role },

    // auto create cookie
    { headers: { "Set-Cookie": serialized } },
  );
}
