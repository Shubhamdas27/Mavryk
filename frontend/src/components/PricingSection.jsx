import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star, Zap, Crown } from "lucide-react";

const PricingSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      price: "₹10,000",
      duration: "/month",
      description:
        "Perfect for small businesses looking to establish their online presence",
      icon: <Zap className="h-8 w-8" />,
      features: [
        "Basic SEO audit and optimization",
        "2 blog posts per month",
        "Social media content (10 posts)",
        "Basic keyword research",
        "Monthly performance report",
        "Email support",
      ],
      popular: false,
      color: "purple",
    },
    {
      id: 2,
      name: "Growth",
      price: "₹25,000",
      duration: "/month",
      description:
        "Ideal for growing businesses ready to scale their digital presence",
      icon: <Star className="h-8 w-8" />,
      features: [
        "Comprehensive SEO optimization",
        "4 blog posts per month",
        "Social media management (20 posts)",
        "Advanced keyword research & strategy",
        "Content calendar planning",
        "Bi-weekly performance reports",
        "Priority email & phone support",
        "Google My Business optimization",
      ],
      popular: true,
      color: "purple",
    },
    {
      id: 3,
      name: "Enterprise",
      price: "₹40,000",
      duration: "/month",
      description:
        "Complete digital marketing solution for established businesses",
      icon: <Crown className="h-8 w-8" />,
      features: [
        "Full SEO & technical optimization",
        "8 blog posts per month",
        "Complete social media management",
        "Advanced content strategy",
        "PPC campaign management",
        "Weekly performance reports",
        "Dedicated account manager",
        "Custom landing pages",
        "Competitor analysis",
        "24/7 priority support",
      ],
      popular: false,
      color: "purple",
    },
  ];

  const customPackage = {
    name: "Custom Package",
    description: "Tailored solutions for unique business needs",
    features: [
      "Personalized strategy development",
      "Custom content volume",
      "Flexible service combinations",
      "Scalable pricing model",
      "Dedicated project manager",
      "Custom reporting dashboard",
    ],
  };

  return (
    <section id="pricing-section" className="md:p-20 py-20 px-5 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4">
            Choose Your <span className="text-purple-500">Growth Plan</span>
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
            Transparent pricing for SEO optimization, content creation, and
            digital marketing services that deliver results.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`relative bg-zinc-900 rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-purple-500 shadow-lg shadow-purple-500/20"
                  : "border-zinc-800 hover:border-purple-500/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 text-purple-500 mb-4`}
                >
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-zinc-400 mb-1">{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://cal.com/shubham-das-2fzvdb/demo"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 block text-center ${
                  plan.popular
                    ? "bg-purple-500 hover:bg-purple-600 text-white"
                    : "bg-zinc-800 hover:bg-purple-500 text-white border border-zinc-700 hover:border-purple-500"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Package Section */}
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-xl p-8 border border-purple-500/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              {customPackage.name}
            </h3>
            <p className="text-zinc-300 text-lg mb-6">
              {customPackage.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-3">
                {customPackage.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-4">
                Let's Talk
              </div>
              <p className="text-zinc-400 mb-6">
                Every business is unique. Let's discuss your specific needs and
                create a custom solution that fits your goals and budget.
              </p>
              <a
                href="https://cal.com/shubham-das-2fzvdb/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 inline-block"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-400 text-sm">
            All plans include a 30-day money-back guarantee. No setup fees.
            Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
