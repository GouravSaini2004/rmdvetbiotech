
// components/ContactEnquiry.jsx
"use client";

import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";

export default function ContactEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");

    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORM_ID}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      // Clear form after successful submission
      setFormData({
        name: "",
        phone: "",
        message: "",
      });

      // Show success message
      setSuccessMessage(
        "Your form submitted successfully!"
      );
    } catch (error) {
      console.error("Formspree error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-900 rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <p className="text-yellow-400 font-bold text-sm tracking-wider mb-3">
                GET IN TOUCH
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Contact &amp; Enquiry
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                For product guidance, dosage advice and dealer inquiries,
                reach out to our customer care team. All India supply
                available.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-green-950" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
                      Customer Care
                    </p>
                    <p className="text-white font-bold">
                      8930924593 &middot; 9467005060
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-green-950" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
                      Address
                    </p>
                    <p className="text-white font-bold">
                      Bhiwani, Haryana - 127027 (India)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-green-950" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
                      Company
                    </p>
                    <p className="text-white font-bold">
                      RMD Vet Biotech
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-green-800/50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-xl mb-1">
                Send an Enquiry
              </h3>

              <p className="text-gray-300 text-sm mb-6">
                We usually respond within one business day.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    disabled={loading}
                    className="w-full bg-green-900/60 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile number"
                    disabled={loading}
                    className="w-full bg-green-900/60 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Which product are you interested in?"
                    rows={4}
                    disabled={loading}
                    className="w-full bg-green-900/60 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors resize-none disabled:opacity-60"
                  />
                </div>

                {/* Success Message */}
                {successMessage && (
                  <div className="rounded-lg bg-green-100 border border-green-300 px-4 py-3 text-sm font-medium text-green-800">
                    {successMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-green-950 font-bold py-3.5 rounded-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

