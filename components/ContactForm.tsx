"use client"

import React, {useRef} from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {useForm} from "react-hook-form";
import {motion, useScroll, useTransform} from "framer-motion";
import SocialLinks from "@/components/SocialLinks";


type ContactFormData = {
    name: string
    email: string
    message: string
}

export default function ContactForm() {
    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0.4, 0.41], [0, 1])
    const scale = useTransform(scrollYProgress, [0.3, 0.4], [0.5, 1])
    const fontSize = useTransform(scrollYProgress, [0, 0.4], ['300px', '110px'])
    const borderRadius = useTransform(scrollYProgress, [0.3, 0.4], ['90px', '0px'])
    const y = useTransform(scrollYProgress, [0.3, 0.4], [-500, 0])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>()

    const onSubmit = (data: ContactFormData) => {
        console.log("Form submitted:", data)
        // Handle form submission here
        reset()
    }


  return (
    <motion.div
        ref={ref}
        style={{ scale , borderRadius, y }}
        className="min-h-screen bg-[#0a1628] flex items-center justify-center p-6 md:p-12"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 md:gap-20">
        {/* Left Side - Contact Heading and Social Links */}
        <div className={`flex flex-col max-md:items-center space-y-16`}>
          <motion.h1 style={{ fontSize }} className="text-7xl lg:text-8xl font-extralight font-cormorant text-white">Contact</motion.h1>

          <motion.div style={{ opacity }}>
            <SocialLinks/>
          </motion.div>
        </div>

        {/* Right Side - Form */}
        <motion.div style={{ opacity }} className="flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full bg-transparent border-0 border-b-2 border-gray-100 text-white px-0 py-2 focus:outline-none focus:border-b-gray-500 transition-colors"
              />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                    },
                })}
                className="w-full bg-transparent border-0 border-b-2 border-gray-100 text-white px-0 py-2 focus:outline-none focus:border-b-gray-500 transition-colors"
              />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-100">
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                rows={4}
                className="w-full bg-transparent border-0 border-b-2 border-gray-100 text-white px-0 py-2 focus:outline-none focus:border-b-gray-500 transition-colors resize-none"
              />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="bg-transparent border border-[#CCE3DE] text-[#CCE3DE] hover:text-[#0a1628] hover:bg-[#CCE3DE] px-8 py-6 text-lg font-medium flex items-center gap-2 transition duration-300"
            >
              Send Message
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  )
}
