'use client'

import React, {useState} from 'react'
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {useForm} from "react-hook-form";


type ContactFormData = {
    name: string
    email: string
    message: string
}

const ContactForm = () => {
    const [error, setError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>()

    const onSubmit = async (data: ContactFormData) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const json = await res.json();

            if (json.error) {
                setError(json.error); // json.error is probably string
            }
        } catch (e: unknown) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError(String(e));
            }
        }
        reset();
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Name Field */}
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", {required: "Name is required"})}
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
                        {...register("message", {required: "Message is required"})}
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
                    <ArrowRight className="w-5 h-5"/>
                </Button>
            </form>

            {error && (
                <div className="fade-in-10 text-red-400 mt-16">
                    {error}
                </div>
            )   }
        </div>
    )
}
export default ContactForm
