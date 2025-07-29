import React from "react";
import Image from "next/image";
import Link from "next/link";

function Services() {
  return (
    <div className="relative w-full">
      <div className="absolute w-[500px] h-[500px] blur-[200px] bg-main-color -z-20"></div>
      <div className="absolute bottom-0 right-2 w-[200px] h-[200px] blur-[100px] bg-main-secondary-color -z-20"></div>
      <div className="mt-24 px-8 py-20 h-fit w-full bg-white/30 -z-10">
        <h1 className="text-6xl font-bold">My Service</h1>
        <div className="flex flex-col md:flex-row justify-between gap-10 mt-10">
          <Image
            src="/service.jpg"
            alt="Service Image"
            className="object-cover rounded-lg"
            width={800}
            height={800}
          />
          <div className="flex items-left justify-around flex-col">
            <p className="text-xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ducimus sequi ipsam deserunt, quas sed nihil cupiditate quidem
              perferendis{" "}
              <span className="text-main-secondary-color">laudantium</span>{" "}
              similique unde voluptatum assumenda odio vitae autem, voluptate
              repudiandae ipsum{" "}
              <span className="text-main-secondary-color">laudantium</span> quae
              non provident id esse! Tempora suscipit, laudantium qui molestiae
              velit similique odit porro nihil, ipsum excepturi laborum et.non
              provident id esse! Tempora suscipit, laudantium qui molestiae
              velit similique odit porro nihil, ipsum excepturi laborum et.
            </p>
            <Link
              href="/service"
              className="text-white active:scale-95 duration-500 bg-main-color py-4 px-8 rounded-2xl mt-10 w-fit"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
