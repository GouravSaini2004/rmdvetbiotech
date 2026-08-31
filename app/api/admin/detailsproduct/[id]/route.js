// app/api/productdetails/[id]/route.js
import { NextResponse } from "next/server";
import connect from "../../../../../lib/mongodb";
import Product from "../../../../../models/product.model";

connect();

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json(
        { success: false, msg: "Product not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    console.error("Fetch product error:", error);
    return NextResponse.json(
      { success: false, msg: "Server error." },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    // console.log(id);

    const deleted = await Product.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, msg: "Product not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      msg: "Product deleted successfully.",
    });
  } catch (error) {
    console.error("Delete product error:", error);
    return NextResponse.json(
      { success: false, msg: "Server error." },
      { status: 500 }
    );
  }
}