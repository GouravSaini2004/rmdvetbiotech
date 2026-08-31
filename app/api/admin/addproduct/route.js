// app/api/products/route.js
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import connect from "../../../../lib/mongodb";
import Product from "../../../../models/product.model";

connect();

// ---- Auth check using the same cookie/JWT system as your admin login ----
async function isAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return false;

  try {
    jwt.verify(token,"Saini@1234");
    return true;
  } catch {
    return false;
  }
}

// ---- Validation ----
function validateProductInput(body) {
  const errors = [];

  if (!body.name || typeof body.name !== "string" || body.name.trim().length < 2) {
    errors.push("Product name is required and must be at least 2 characters.");
  }
  if (body.name && body.name.length > 150) {
    errors.push("Product name must be under 150 characters.");
  }

  if (!body.description || typeof body.description !== "string" || body.description.trim().length < 10) {
    errors.push("Description is required and must be at least 10 characters.");
  }

  if (!body.image || typeof body.image !== "string") {
    errors.push("Image path is required.");
  }

  if (body.benefits && !Array.isArray(body.benefits)) {
    errors.push("Benefits must be an array of strings.");
  }

  if (body.idealFor && !Array.isArray(body.idealFor)) {
    errors.push("idealFor must be an array of strings.");
  }

  return errors;
}

function sanitizeString(str) {
  return str.replace(/[<>]/g, "").trim();
}

export async function POST(request) {
  try {
    // 1. Auth check
    // const authed = await isAuthenticated();
    // if (!authed) {
    //   return NextResponse.json(
    //     { success: false, msg: "Unauthorized." },
    //     { status: 401 }
    //   );
    // }

    // 2. Parse body safely
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, msg: "Invalid JSON body." },
        { status: 400 }
      );
    }

    // 3. Validate
    const errors = validateProductInput(body);
    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, msg: "Validation failed.", errors },
        { status: 400 }
      );
    }

    // 4. Sanitize
    const cleanData = {
      name: sanitizeString(body.name),
      tagline: body.tagline ? sanitizeString(body.tagline) : undefined,
      category: body.category ? sanitizeString(body.category) : "All Livestock",
      size: body.size ? sanitizeString(body.size) : undefined,
      image: sanitizeString(body.image),
      description: sanitizeString(body.description),
      benefits: Array.isArray(body.benefits)
        ? body.benefits.map((b) => sanitizeString(b))
        : [],
      idealFor: Array.isArray(body.idealFor)
        ? body.idealFor.map((a) => sanitizeString(a))
        : [],
    };

    // 5. Create
    const product = await Product.create(cleanData);

    return NextResponse.json(
      { success: true, msg: "Product created successfully.", data: product },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create product error:", error);
    return NextResponse.json(
      { success: false, msg: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

// export async function GET() {
//   try {
//     const products = await Product.find({ isActive: true }).sort({
//       createdAt: -1,
//     });
//     return NextResponse.json({ success: true, data: products });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, msg: "Server error." },
//       { status: 500 }
//     );
//   }
// }