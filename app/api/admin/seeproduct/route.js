// app/api/products/route.js
import { NextResponse } from "next/server";
import connect from "../../../../lib/mongodb";
import Product from "../../../../models/product.model";

connect();

export async function GET() {
  try {
    // Projection: only fetch the fields needed for list views.
    // "-fieldName" excludes fields; here we're being explicit and only
    // selecting what we want instead, which is safer as the schema grows.
    const products = await Product.find(
      { isActive: true },
      "name tagline category size image"
    ).sort({ createdAt: -1 });
    // console.log(products)
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("Fetch products error:", error);
    return NextResponse.json(
      { success: false, msg: "Server error." },
      { status: 500 }
    );
  }
}