// app/api/admin/signup/route.ts
import { NextResponse } from "next/server";
import connect from "../../../../lib/mongodb";
import Admin from "../../../../models/user.model";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await Admin.findOne({ email });

    if (user) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new Admin({
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      user: { email: savedUser.email },
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}