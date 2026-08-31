
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { ArrowLeft, Plus, X, Upload, PackagePlus } from "lucide-react";

export default function AddProductForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    category: "All Livestock",
    size: "",
    image: "",
    description: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [benefits, setBenefits] = useState([""]);
  const [idealFor, setIdealFor] = useState([""]);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/check", {
          cache: "no-store",
        });

        const data = await res.json();

        if (!data.authenticated) {
          router.replace("/admin/login");
          return;
        }

        setIsAdmin(true);
      } catch (error) {
        console.error(error);
        router.replace("/admin/login");
      }
    }

    checkAuth();
  }, [router]);

  if (isAdmin === null) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-green-100 border-t-green-600 rounded-full animate-spin mx-auto mb-4" />

          <p className="text-sm font-semibold text-green-900">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleListChange(list, setList, index, value) {
    const updated = [...list];
    updated[index] = value;
    setList(updated);
  }

  function addListItem(list, setList) {
    setList([...list, ""]);
  }

  function removeListItem(list, setList, index) {
    setList(list.filter((_, i) => i !== index));
  }

  async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file));
    setUploading(true);
    setError("");

    try {
      const uploadData = new FormData();
      uploadData.append("image", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: uploadData,
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.msg || "Image upload failed.");
        setImagePreview(null);
        return;
      }

      setFormData((prev) => ({ ...prev, image: data.url }));
    } catch (err) {
      setError("Image upload failed. Please try again.");
      setImagePreview(null);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.description || !formData.image) {
      setError("Name, description and image are required.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/admin/addproduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          benefits: benefits.filter((b) => b.trim() !== ""),
          idealFor: idealFor.filter((a) => a.trim() !== ""),
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.msg || "Something went wrong.");
        setLoading(false);
        return;
      }

      router.push("/admin/panel");
    } catch (err) {
      setError("Server error. Please try again.");
      setLoading(false);
    }
  }

  const inputClass =
    "w-full border border-green-200 bg-white rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition";

  const labelClass =
    "block text-sm font-semibold text-green-950 mb-2";

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

        {/* Back Button */}
        <Link
          href="/admin/panel"
          className="inline-flex items-center gap-2 mb-6 px-4 py-2.5 rounded-xl bg-white border border-green-200 text-green-800 font-semibold text-sm shadow-sm hover:bg-green-50 hover:border-green-300 transition-all"
        >
          <ArrowLeft size={18} />
          Back to Admin Panel
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
              <PackagePlus className="w-6 h-6 text-green-700" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-green-600">
                Product Management
              </p>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-green-950">
                Add Product
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-green-700/70 ml-0 sm:ml-14">
            Add a new veterinary product to your RMD VET BIOTECH catalogue.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white border border-green-100 rounded-2xl shadow-sm overflow-hidden">

          {/* Card Header */}
          <div className="bg-gradient-to-r from-green-700 to-green-600 px-5 sm:px-8 py-5">
            <h2 className="text-lg font-bold text-white">
              Product Information
            </h2>

            <p className="text-sm text-green-50 mt-1">
              Fill in the details below to create your product.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-8 space-y-7"
          >

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            {/* Image Upload */}
            <div>
              <label className={labelClass}>
                Product Image <span className="text-red-500">*</span>
              </label>

              <div className="border-2 border-dashed border-green-200 bg-green-50/50 rounded-2xl p-6 sm:p-8 text-center hover:border-green-500 hover:bg-green-50 transition-all">

                {imagePreview ? (
                  <div className="flex flex-col items-center gap-4">

                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-44 h-44 object-cover rounded-2xl border-4 border-white shadow-md"
                      />
                    </div>

                    {uploading && (
                      <div className="flex items-center gap-2 text-sm font-medium text-green-700">
                        <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
                        Uploading image...
                      </div>
                    )}

                    {formData.image && !uploading && (
                      <div className="flex items-center gap-2 text-sm text-green-700 font-semibold bg-green-100 px-4 py-2 rounded-full">
                        <span className="text-green-600">✓</span>
                        Image uploaded successfully
                      </div>
                    )}

                    {!uploading && (
                      <label className="cursor-pointer text-sm font-semibold text-green-700 hover:text-green-900">
                        Change image
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/webp"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                ) : (
                  <label className="cursor-pointer flex flex-col items-center gap-3 text-green-700">

                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                      <Upload className="w-7 h-7 text-green-600" />
                    </div>

                    <span className="text-sm font-bold text-green-900">
                      Click to upload an image
                    </span>

                    <span className="text-xs text-green-600/70">
                      JPG, PNG or WEBP, up to 10MB
                    </span>

                    <span className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700 transition">
                      Choose Image
                    </span>

                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Product Name */}
            <div>
              <label className={labelClass}>
                Product Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Calcitiv XXL Gel"
                className={inputClass}
              />
            </div>

            {/* Tagline */}
            <div>
              <label className={labelClass}>
                Tagline <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                placeholder="e.g. For Bone & Growth Support"
                className={inputClass}
              />
            </div>

            {/* Category & Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div>
                <label className={labelClass}>
                  Category 
                </label>

                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g. All Livestock"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>
                  Size <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  placeholder="e.g. 300ml"
                  className={inputClass}
                />
              </div>

            </div>

            {/* Description */}
            <div>
              <label className={labelClass}>
                Description <span className="text-red-500">*</span>
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                placeholder="Enter a detailed description of the product..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Benefits */}
            <div>
              <label className={labelClass}>
                Key Benefits <span className="text-red-500">*</span>
              </label>

              <div className="space-y-3">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">

                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={benefit}
                        onChange={(e) =>
                          handleListChange(
                            benefits,
                            setBenefits,
                            i,
                            e.target.value
                          )
                        }
                        placeholder={`Benefit ${i + 1}`}
                        className={inputClass}
                      />
                    </div>

                    {benefits.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          removeListItem(benefits, setBenefits, i)
                        }
                        className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition"
                      >
                        <X size={18} />
                      </button>
                    )}

                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => addListItem(benefits, setBenefits)}
                className="inline-flex items-center gap-1.5 text-green-700 font-semibold text-sm mt-3 hover:text-green-900 transition"
              >
                <Plus size={16} />
                Add benefit
              </button>
            </div>

            {/* Ideal For */}
            <div>
              <label className={labelClass}>
                Ideal For <span className="font-normal text-green-600">(animals)</span> <span className="text-red-500">*</span>
              </label>

              <div className="space-y-3">
                {idealFor.map((animal, i) => (
                  <div key={i} className="flex items-center gap-2">

                    <input
                      type="text"
                      value={animal}
                      onChange={(e) =>
                        handleListChange(
                          idealFor,
                          setIdealFor,
                          i,
                          e.target.value
                        )
                      }
                      placeholder={`Animal ${i + 1}`}
                      className={inputClass}
                    />

                    {idealFor.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          removeListItem(idealFor, setIdealFor, i)
                        }
                        className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition"
                      >
                        <X size={18} />
                      </button>
                    )}

                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => addListItem(idealFor, setIdealFor)}
                className="inline-flex items-center gap-1.5 text-green-700 font-semibold text-sm mt-3 hover:text-green-900 transition"
              >
                <Plus size={16} />
                Add animal 
              </button>
            </div>

            {/* Divider */}
            <div className="border-t border-green-100 pt-6">

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || uploading || !formData.image}
                className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-300 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                {uploading
                  ? "Waiting for image upload..."
                  : loading
                  ? "Creating Product..."
                  : "Create Product"}
              </button>

              <p className="text-center text-xs text-gray-400 mt-3">
                Fields marked with <span className="text-red-500">*</span> are required.
              </p>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

