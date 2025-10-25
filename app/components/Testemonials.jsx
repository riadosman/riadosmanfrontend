import React from "react";
import Image from "next/image";

function Testemonials() {
  return (
    <div className="relative w-full">
      <div className="absolute w-[500px] h-[500px] blur-[200px] bg-main-color -z-20"></div>
      <div className="absolute bottom-0 right-2 w-[200px] h-[200px] blur-[100px] bg-main-secondary-color -z-20"></div>
      <div className="px-8 py-20 h-fit w-full ">
        <h1 className="text-6xl font-bold">Testemonials</h1>
        <div className="flex flex-col md:flex-row justify-between gap-10 mt-10">
          <div className="text-center p-10 flex-1 border-2 border-main-color rounded-3xl min-h-96 relative flex items-center justify-center">
            <Image
              src="/quote.png"
              width={100}
              height={100}
              alt="quote"
              className="absolute top-0 left-0"
            />
            <p className="text-3xl italic">
              شكرا كتير على جهودكم الموقع كلو كان ممتاز وحسب الطلب تماما وسرعة
              بالإنجاز والتعامل معكم رائع وإن شاء الله التعامل
              رحيستمر يعطيكم العافية
            </p>
            <Image
              src="/quote.png"
              width={100}
              height={100}
              alt="quote"
              className="absolute bottom-0 right-0 rotate-180"
            />
          </div>
          <div className="text-center p-10 flex-1 border-2 border-main-color rounded-3xl min-h-96 relative flex items-center justify-center">
            <Image
              src="/quote.png"
              width={100}
              height={100}
              alt="quote"
              className="absolute top-0 left-0"
            />
            <p className="text-3xl italic">
              انا الاستاذ يوسف عملت معا الاخ رياض عمل ممتاز وسرعة ودقة في
              العمل سلمت اناملك
            </p>
            <Image
              src="/quote.png"
              width={100}
              height={100}
              alt="quote"
              className="absolute bottom-0 right-0 rotate-180"
            />
          </div>
          <div className="text-center p-10 flex-1 border-2 border-main-color rounded-3xl min-h-96 relative flex items-center justify-center">
            <Image
              src="/quote.png"
              width={100}
              height={100}
              alt="quote"
              className="absolute top-0 left-0"
            />
            <p className="text-3xl italic">
              الاستاذ رياض دقة بالعمل وسرعة بالتسليم، من أمهر
              المبرمجين يلي عملت معهم
            </p>
            <Image
              src="/quote.png"
              width={100}
              height={100}
              alt="quote"
              className="absolute bottom-0 right-0 rotate-180"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testemonials;
