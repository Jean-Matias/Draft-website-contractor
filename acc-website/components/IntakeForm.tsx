"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntakeFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IntakeForm({ isOpen, onClose }: IntakeFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
    contactMethod: "call",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.phone.trim()) newErrors.phone = "Please enter your phone number";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Please enter a valid email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", description: "", contactMethod: "call" });
      setErrors({});
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface hover:bg-charcoal/10 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="bg-forest-dark px-8 py-6">
              <h3 className="font-display text-2xl text-white">
                Get Your Free Estimate
              </h3>
              <p className="text-white/70 text-sm mt-1">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? "border-red-400 bg-red-50" : "border-surface bg-stone"
                      } focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors`}
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? "border-red-400 bg-red-50" : "border-surface bg-stone"
                      } focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors`}
                      placeholder="(540) 555-0123"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? "border-red-400 bg-red-50" : "border-surface bg-stone"
                      } focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-1.5">
                      Brief Project Description
                    </label>
                    <textarea
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-surface bg-stone focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Contact Method */}
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      {[
                        { value: "call", label: "Call" },
                        { value: "text", label: "Text" },
                        { value: "email", label: "Email" },
                      ].map((method) => (
                        <label
                          key={method.value}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer transition-all ${
                            form.contactMethod === method.value
                              ? "border-forest bg-forest/5 text-forest font-semibold"
                              : "border-surface bg-stone text-gray hover:border-forest/30"
                          }`}
                        >
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method.value}
                            checked={form.contactMethod === method.value}
                            onChange={(e) =>
                              setForm({ ...form, contactMethod: e.target.value })
                            }
                            className="sr-only"
                          />
                          {method.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-forest hover:bg-forest-light text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
                  >
                    Submit Request
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-forest"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-display text-2xl text-charcoal mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray mb-6">
                    We&apos;ve received your request and will be in touch within 24
                    hours with your free estimate.
                  </p>
                  <button
                    onClick={handleClose}
                    className="text-forest font-semibold hover:text-forest-light transition-colors"
                  >
                    Close this window
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
