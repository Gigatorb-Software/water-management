import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto py-6 ">
      <div className="border shadow-md mx-8 py-6">
        <p className="text-5xl text-center font-serif font-medium">Service</p>
        <div className="flex flex-wrap gap-6 justify-center md:justify-evenly py-6 items-center">
          <div className="text-center min-w-[150px]">
            <img
              src="https://www.pureitwater.com/media/wysiwyg/Book-a-Demo_1.png"
              alt=""
              className="w-28 mx-auto"
            />
            <p className="py-2 font-semibold">Book A Demo</p>
          </div>

          <div className="text-center min-w-[150px]">
            <img
              src="https://www.pureitwater.com/media/wysiwyg/Order-GKK_2.png"
              alt=""
              className="w-28 mx-auto"
            />
            <p className="py-2 font-semibold">Order Germ Kill Kit</p>
          </div>

          <div className="text-center min-w-[150px]">
            <img
              src="https://www.pureitwater.com/media/wysiwyg/Extended-Warranty.png"
              alt=""
              className="w-28 mx-auto"
            />
            <p className="py-2 font-semibold">Extended Warranty</p>
          </div>

          <div className="text-center min-w-[150px]">
            <img
              src="https://www.pureitwater.com/media/wysiwyg/optimized/Maintenance-Contract.png"
              alt=""
              className="w-28 mx-auto"
            />
            <p className="py-2 font-semibold">Services Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
