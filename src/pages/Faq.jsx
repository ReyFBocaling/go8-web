import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../constants";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-4xl font-bold text-gradient mb-3">
        Frequently Asked Questions
      </h1>

      {/* FAQ Section */}
      <div className=" mx-auto pb-16">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-400" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
