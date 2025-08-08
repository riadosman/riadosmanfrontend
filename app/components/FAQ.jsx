import React from "react";
import { faqData } from "../../data/faq";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

function FAQ() {
  return (
    <div className="relative w-full">
      <div className="absolute w-[500px] blur-[200px] bg-main-color -z-20"></div>
      <div className="absolute bottom-0 right-2 w-[200px] h-[200px] blur-[100px] bg-main-secondary-color -z-20"></div>
      <div className=" px-8 py-10 h-fit w-full bg-white/30 -z-10">
        <h1 className="text-6xl font-bold">Frequently Asked Questions</h1>
        <div className="flex flex-col md:flex-row-reverse items-center justify-around gap-10">
          <div className="flex-1">
            <Image
              src="/faqs.png"
              width={700}
              height={500}
              alt="faqs"
              className="object-contain"
            />
          </div>
          <div className="space-y-6 mt-10 text-xl flex-1">
            {faqData.map((item, idx) => (
              <details
                key={idx}
                className="bg-white/10 p-4 rounded-lg shadow-md group"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-2xl list-none marker:hidden">
                  {item.question}
                  <ChevronDown className="transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-main-color">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
