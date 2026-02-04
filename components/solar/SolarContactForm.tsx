"use client";

import { useState, useEffect } from "react";
import Button from "@/components/Button";
import { Send, Loader2, CheckCircle, XCircle } from "lucide-react";

interface SolarContactFormProps {
  selectedPackageId?: string | null;
  selectedPackageName?: string | null;
  formId?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  systemSize: string;
  budget: string;
  message: string;
  contactMethod: string;
}

const systemSizeOptions = [
  { value: "", label: "Select system size..." },
  { value: "1.5kva", label: "1.5 kVA - Essential Backup" },
  { value: "3.2kva", label: "3.2 kVA - Home Starter" },
  { value: "5kva", label: "5 kVA - Home Power" },
  { value: "10kva", label: "10 kVA - Power Pro" },
  { value: "20kva", label: "20+ kVA - Commercial" },
  { value: "custom", label: "Custom / Not Sure" },
];

const budgetOptions = [
  { value: "", label: "Select budget range..." },
  { value: "under-2000", label: "Under $2,000" },
  { value: "2000-5000", label: "$2,000 - $5,000" },
  { value: "5000-10000", label: "$5,000 - $10,000" },
  { value: "10000-20000", label: "$10,000 - $20,000" },
  { value: "20000-plus", label: "$20,000+" },
  { value: "discuss", label: "Prefer to Discuss" },
];

const contactMethodOptions = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone Call" },
  { value: "whatsapp", label: "WhatsApp" },
];

export default function SolarContactForm({
  selectedPackageId,
  selectedPackageName,
  formId = "solar-contact-form",
}: SolarContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    systemSize: "",
    budget: "",
    message: "",
    contactMethod: "email",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  // Pre-fill message when package is selected
  useEffect(() => {
    if (selectedPackageId && selectedPackageName) {
      const packageMessage = `I'm interested in the "${selectedPackageName}" package (ID: ${selectedPackageId}). Please provide more details and availability.`;
      setFormData((prev) => ({
        ...prev,
        message: prev.message || packageMessage,
        systemSize: selectedPackageId.replace("pkg-", "") || prev.systemSize,
      }));
    }
  }, [selectedPackageId, selectedPackageName]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact-solar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "Solar Page",
          selectedPackageId: selectedPackageId || undefined,
        }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We've received your inquiry and will contact you within 24 hours.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          systemSize: "",
          budget: "",
          message: "",
          contactMethod: "email",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-background-secondary border border-primary/20 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-foreground-muted";

  const labelClasses = "block text-sm font-medium text-foreground mb-2";

  const errorClasses = "text-red-400 text-xs mt-1";

  return (
    <div className="glass-card rounded-2xl p-8" id={formId}>
      <h2 className="text-2xl font-bold text-foreground mb-2 font-[family-name:var(--font-orbitron)]">
        Get a Free Solar Quote
      </h2>
      <p className="text-foreground-muted mb-8">
        Fill out the form below and our solar specialists will get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={`${inputClasses} ${errors.name ? "border-red-400" : ""}`}
              placeholder="John Doe"
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className={errorClasses}>
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`${inputClasses} ${errors.email ? "border-red-400" : ""}`}
              placeholder="john@example.com"
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className={errorClasses}>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Phone & Address */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className={`${inputClasses} ${errors.phone ? "border-red-400" : ""}`}
              placeholder="+263 77 123 4567"
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className={errorClasses}>
                {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="address" className={labelClasses}>
              Installation Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Your address (optional)"
            />
          </div>
        </div>

        {/* System Size & Budget */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="systemSize" className={labelClasses}>
              Preferred System Size
            </label>
            <select
              id="systemSize"
              name="systemSize"
              value={formData.systemSize}
              onChange={handleChange}
              className={inputClasses}
            >
              {systemSizeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="budget" className={labelClasses}>
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={inputClasses}
            >
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className={labelClasses}>Preferred Contact Method</label>
          <div className="flex flex-wrap gap-4">
            {contactMethodOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={option.value}
                  checked={formData.contactMethod === option.value}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary bg-background-secondary border-primary/30 focus:ring-primary focus:ring-offset-0"
                />
                <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClasses}>
            Your Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`${inputClasses} resize-none ${errors.message ? "border-red-400" : ""}`}
            placeholder="Tell us about your solar needs, property type, current electricity usage..."
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className={errorClasses}>
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Status */}
        <div
          role="status"
          aria-live="polite"
          className={`${submitStatus.type ? "" : "hidden"}`}
        >
          {submitStatus.type === "success" && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-green-400 text-sm">{submitStatus.message}</p>
            </div>
          )}
          {submitStatus.type === "error" && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-400 text-sm">{submitStatus.message}</p>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Inquiry
            </>
          )}
        </Button>

        <p className="text-xs text-foreground-muted text-center">
          By submitting this form, you agree to be contacted about our solar installation services.
        </p>
      </form>
    </div>
  );
}
