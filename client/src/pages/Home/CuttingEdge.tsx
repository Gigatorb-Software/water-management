import React from 'react';

const CuttingEdge = () => {
  return (
    <div className=' container mx-auto pt-8'>
      <p className='text-5xl text-center font-serif font-medium'>Cutting-Edge Technology</p>
      <div className='flex flex-wrap gap-4 justify-center md:justify-between items-stretch p-10'>
        
        <div className='border shadow-xl px-2 py-8 text-center flex-1 min-w-[250px] max-w-[300px] flex flex-col'>
          <img
            src='https://www.pureitwater.com/media/wysiwyg/Goodness-of-Copper.png'
            alt=''
            className='w-24 mx-auto'
          />
          <div className='flex-grow'>
            <p className='p-4'>Goodness of Copper</p>
            <p className='px-4 text-gray-400'>Enriches every glass of RO water with 99.8% pure copper</p>
          </div>
        </div>

     
        <div className='border shadow-xl px-2 py-8 text-center flex-1 min-w-[250px] max-w-[300px] flex flex-col'>
          <img
            src='https://www.pureitwater.com/media/wysiwyg/optimized/Copper.png'
            alt=''
            className='w-24 mx-auto'
          />
          <div className='flex-grow'>
            <p className='p-4'>High Water Saving</p>
            <p className='px-4 text-gray-400'>Saves up to 80 glasses of water daily vs. other ROs</p>
          </div>
        </div>

     
        <div className='border shadow-xl px-2 py-8 text-center flex-1 min-w-[250px] max-w-[300px] flex flex-col'>
          <img
            src='https://www.pureitwater.com/media/wysiwyg/optimized/Stage7.png'
            alt=''
            className='w-24 mx-auto'
          />
          <div className='flex-grow'>
            <p className='p-4'>7 Stage Advanced Purification</p>
            <p className='px-4 text-gray-400'>Gives 100% safe, mineral enriched water without harmful viruses & bacteria</p>
          </div>
        </div>

        <div className='border shadow-xl px-2 py-8 text-center flex-1 min-w-[250px] max-w-[300px] flex flex-col'>
          <img
            src='https://www.pureitwater.com/media/wysiwyg/optimized/200px-Seal_of_the_United_States_Environmental_Protection_Agency.png'
            alt=''
            className='w-24 mx-auto'
          />
          <div className='flex-grow'>
            <p className='p-4'>USEPA Compliant</p>
            <p className='px-4 text-gray-400'>Meets the toughest safety standards by removing 1cr virus and 10cr bacteria from 1L water</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuttingEdge;
