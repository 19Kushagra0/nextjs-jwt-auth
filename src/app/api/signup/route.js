import { findUser, addUser } from "@/lib/users";

export async function POST(req) {
  const { username, password } = await req.json();

  // basic validation
  if (!username || !password) {
    return new Response(
      JSON.stringify({ message: "Username and password required" }),
      { status: 400 },
    );
  }

  // check if user already exists
  const existingUser = findUser(username);
  if (existingUser) {
    return new Response(JSON.stringify({ message: "User already exists" }), {
      status: 409,
    });
  }

  // save user
  addUser(username, password);

  return new Response(JSON.stringify({ message: "Signup successful" }), {
    status: 201,
  });
}
