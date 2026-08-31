// models/Product.js
import mongoose from "mongoose";

// const DosageSchema = new mongoose.Schema(
//   {
//     animal: { type: String, required: true },
//     amount: { type: String, required: true },
//   },
//   { _id: false }
// );

const ProductSchema = new mongoose.Schema(
  {
    // id: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    //   lowercase: true,
    //   // e.g. "rumitiv-herbal-tonic" — used in the URL /products/[id]
    // },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    tagline: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
      default: "All Livestock",
    },
    size: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    benefits: {
      type: [String],
      default: [],
    },
    // dosage: {
    //   type: [DosageSchema],
    //   default: [],
    // },
    idealFor: {
      type: [String],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
      // lets you hide a product without deleting it
    },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;