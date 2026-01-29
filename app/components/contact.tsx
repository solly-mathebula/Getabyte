"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { SendHorizonal } from "lucide-react";
import clsx from "clsx";

// Schema validation
const schema = z.object({
  name: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Enter a valid email" }),
  subject: z.string().min(3, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      toast.success("Message sent successfully! 🎉");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto mt-16 mb-20 px-6 sm:px-8 md:px-10 py-10 bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-300"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900">
        Get in Touch
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {[
          { label: "Full Name", name: "name", type: "text" },
          { label: "Email Address", name: "email", type: "email" },
          { label: "Subject", name: "subject", type: "text" },
        ].map(({ label, name, type }) => {
          const fieldError = errors[name as keyof FormData];
          return (
            <div key={name} className="flex flex-col gap-2">
              <label className="font-medium text-blue-900">{label}</label>
              <input
                type={type}
                {...register(name as keyof FormData)}
                className={clsx(
                  "p-3 rounded-xl border-2 text-gray-900",
                  fieldError
                    ? "border-red-500"
                    : "border-gray-300 focus:border-blue-700"
                )}
                placeholder={label}
              />
              {fieldError && (
                <span className="text-sm text-red-500">
                  {fieldError.message}
                </span>
              )}
            </div>
          );
        })}

        <div className="flex flex-col gap-2">
          <label className="font-medium text-blue-900">Message</label>
          <textarea
            rows={5}
            {...register("message")}
            className={clsx(
              "p-3 rounded-xl border-2 text-gray-900 resize-none",
              errors.message
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-700"
            )}
            placeholder="Type your message here..."
          />
          {errors.message && (
            <span className="text-sm text-red-500">
              {errors.message.message}
            </span>
          )}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
          type="submit"
          className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-blue-800 to-yellow-500 text-white font-semibold text-lg hover:from-blue-700 hover:to-yellow-400 transition-all duration-300 disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <SendHorizonal size={20} />
        </motion.button>
      </form>

      <div className="mt-10 text-center text-blue-900">
        <h3 className="text-xl font-semibold mb-1">Getabyte Tech</h3>
        <p className="text-sm">
          90 Grayston Drive, Sandton, Johannesburg, 2169
        </p>
      </div>
    </motion.div>
  );
}
