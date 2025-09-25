import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
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

  const sections = [
    {
      title: "Agreement to Terms",
      content: `By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
      
      The materials contained on this website are protected by applicable copyright and trademark law.`,
    },
    {
      title: "Use License",
      content: `Permission is granted to temporarily download one copy of the materials on Mavryk's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
      
      • Modify or copy the materials
      • Use the materials for any commercial purpose or for any public display
      • Attempt to decompile or reverse engineer any software contained on Mavryk's website
      • Remove any copyright or other proprietary notations from the materials
      • Transfer the materials to another person or "mirror" the materials on any other server
      
      This license shall automatically terminate if you violate any of these restrictions and may be terminated by Mavryk at any time.`,
    },
    {
      title: "Services",
      content: `Mavryk provides digital marketing services including SEO optimization, content creation, social media marketing, pay-per-click advertising, and comprehensive digital solutions to help businesses gain reach and visibility online.
      
      The specific services to be provided will be detailed in separate agreements or statements of work between Mavryk and the client.`,
    },
    {
      title: "Payment Terms",
      content: `Payment terms will be specified in the service agreement between Mavryk and the client. Unless otherwise stated, payment is due within 30 days of invoice date.
      
      Late payments may be subject to a fee of 1.5% per month on the outstanding balance. Mavryk reserves the right to suspend services if payment is not received according to the agreed terms.`,
    },
    {
      title: "Client Responsibilities",
      content: `Clients are responsible for:
      
      • Providing timely and accurate information necessary for the delivery of services
      • Reviewing and approving deliverables in a timely manner
      • Ensuring that all materials provided to Mavryk do not infringe on any third-party rights
      • Complying with all applicable laws and regulations related to their business and online presence`,
    },
    {
      title: "Disclaimer",
      content: `The materials on Mavryk's website are provided on an 'as is' basis. Mavryk makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      
      Further, Mavryk does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.`,
    },
    {
      title: "Limitations",
      content: `In no event shall Mavryk or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mavryk's website, even if Mavryk or a Mavryk authorized representative has been notified orally or in writing of the possibility of such damage.
      
      Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.`,
    },
    {
      title: "Accuracy of Materials",
      content: `The materials appearing on Mavryk's website could include technical, typographical, or photographic errors. Mavryk does not warrant that any of the materials on its website are accurate, complete, or current. Mavryk may make changes to the materials contained on its website at any time without notice. However, Mavryk does not make any commitment to update the materials.`,
    },
    {
      title: "Links",
      content: `Mavryk has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Mavryk of the site. Use of any such linked website is at the user's own risk.`,
    },
    {
      title: "Modifications",
      content: `Mavryk may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.`,
    },
    {
      title: "Governing Law",
      content: `These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that location.`,
    },
    {
      title: "Contact Information",
      content: `If you have any questions about these Terms of Service, please contact us at:
      
      Mavryk
      Pune, Maharashtra
      Email: work.shubhamdas@gmail.com
      Phone: +91 87652 94310`,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Terms of <span className="text-purple-500">Service</span>
          </h1>
          <p className="text-zinc-400 max-w-3xl mx-auto">
            Last Updated: April 19, 2025
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section, index) => (
            <motion.div key={index} className="mb-12" variants={itemVariants}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {section.title}
              </h2>
              <div className="text-zinc-300 space-y-4">
                {section.content.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
