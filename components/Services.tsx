import React from 'react';
import { Code, Palette, Sparkles, Zap } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Code size={32} />,
            title: "Custom Development",
            description: "Tailored web applications built with React, Next.js, and modern frameworks"
        },
        {
            icon: <Palette size={32} />,
            title: "UI/UX Design",
            description: "User-centered design that balances aesthetics with functionality"
        },
        {
            icon: <Sparkles size={32} />,
            title: "Brand Identity",
            description: "Cohesive visual systems that communicate your unique value"
        },
        {
            icon: <Zap size={32} />,
            title: "Performance",
            description: "Lightning-fast sites optimized for conversion and SEO"
        }
    ];

    return (
        <div className="bg-[#0a1628] py-20 px-8 xl:px-40">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#09051C] border border-gray-100/20 rounded-xl p-8 hover:border-blue-500/50 transition-colors"
                        >
                            <div className="text-blue-400 mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-light text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 text-lg">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;