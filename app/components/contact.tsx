"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { SendHorizonal } from "lucide-react";
import clsx from "clsx";

const schema = z.object({
  name: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Enter a valid email" }),
  subject: z.string().min(3, { message: "Subject is required" }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }),
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
      await new Promise((res) => setTimeout(res, 1200));
      toast.success("Message sent successfully!");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-120px] left-[-100px] w-[350px] h-[350px] bg-yellow-400/20 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left Side - Corporate Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 leading-tight">
            Let’s Build the Future Together
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            Partner with Getabyte Tech to accelerate digital transformation,
            enhance cybersecurity, and implement scalable enterprise solutions.
          </p>

          <div className="mt-10 space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-blue-900">
                Headquarters
              </h3>
              <p className="text-sm">
                90 Grayston Drive, Sandton, Johannesburg, 2169
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900">
                Email
              </h3>
              <p className="text-sm">info@getabytetech.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900">
                Phone
              </h3>
              <p className="text-sm">+27 11 000 0000</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-200">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {[
              { label: "Full Name", name: "name", type: "text" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Subject", name: "subject", type: "text" },
            ].map(({ label, name, type }) => {
              const fieldError = errors[name as keyof FormData];

              return (
                <div key={name} className="relative">
                  <input
                    type={type}
                    placeholder=" "
                    {...register(name as keyof FormData)}
                    className={clsx(
                      "peer w-full border-b-2 bg-transparent py-3 text-gray-900 placeholder-transparent focus:outline-none transition-all duration-300",
                      fieldError
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-800"
                    )}
                  />

                  <label
                    className={clsx(
                      "absolute left-0 top-3 text-gray-500 text-sm transition-all duration-300",
                      "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400",
                      "peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-800",
                      !fieldError && "peer-valid:-top-3 peer-valid:text-sm"
                    )}
                  >
                    {label}
                  </label>

                  {fieldError && (
                    <p className="text-sm text-red-500 mt-2">
                      {fieldError.message}
                    </p>
                  )}
                </div>
              );
            })}

            {/* Message */}
            <div className="relative">
              <textarea
                rows={4}
                placeholder=" "
                {...register("message")}
                className={clsx(
                  "peer w-full border-b-2 bg-transparent py-3 text-gray-900 resize-none placeholder-transparent focus:outline-none transition-all duration-300",
                  errors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-800"
                )}
              />

              <label
                className={clsx(
                  "absolute left-0 top-3 text-gray-500 text-sm transition-all duration-300",
                  "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400",
                  "peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-800",
                  !errors.message && "peer-valid:-top-3 peer-valid:text-sm"
                )}
              >
                Message
              </label>

              {errors.message && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              disabled={isSubmitting}
              type="submit"
              className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <SendHorizonal
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
