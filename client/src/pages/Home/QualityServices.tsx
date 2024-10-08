import React from 'react';

const QualityServices = () => {
  return (
    <div className=' py-6 bg-blue-100'>
        <div className='container mx-auto'>
      <p className='text-5xl text-center font-serif font-medium'>Quality Service</p>
      <div className='flex flex-wrap gap-6 justify-center md:justify-evenly py-8 items-center'>
        {/* Service 1 */}
        <div className='text-center min-w-[150px]'>
          <img
            src='https://www.pureitwater.com/media/wysiwyg/Wide-service-network.png'
            alt=''
            className='w-28 mx-auto'
          />
          <p className='py-2 font-semibold'>Wide Service Network</p>
        </div>

        {/* Service 2 */}
        <div className='text-center min-w-[150px]'>
          <img
            src='https://www.pureitwater.com/media/wysiwyg/Easy-Returns_1.png'
            alt=''
            className='w-28 mx-auto'
          />
          <p className='py-2 font-semibold'>Easy Returns</p>
        </div>

        {/* Service 3 */}
        <div className='text-center min-w-[150px]'>
          <img
            src='https://pureitwater.com/media/wysiwyg/Pureit-Promise.png'
            alt=''
            className='w-28 mx-auto'
          />
          <p className='py-2 font-semibold'>Pureit Promise</p>
        </div>

        {/* Service 4 */}
        <div className='text-center min-w-[150px]'>
          <img
            src='https://www.pureitwater.com/media/wysiwyg/Free-one-year-warranty.png'
            alt=''
            className='w-28 mx-auto'
          />
          <p className='py-2 font-semibold'>Free 1 Year Warranty</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default QualityServices;
