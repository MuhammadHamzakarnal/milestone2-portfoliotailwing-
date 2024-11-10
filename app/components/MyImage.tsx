import React from "react";
import Image from "next/image";

// Import your image
import firstImage from "../public/image.png";

export const MyImage = () => {
  return (
    <div className="max-w-full mx-auto rounded-full mb-48 mt-10 mr-24">
      <Image
        src={firstImage.src}
        alt="Image1"
        width={500}
        height={500}
        className="rounded-full w-full h-auto"
      />
    </div>
  );
};
