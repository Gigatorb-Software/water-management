import React from 'react';

const BlogCard = () => {
    return (
        <div className="bg-white mx-auto my-20 flex flex-col items-center">
            {/* Title */}
            <div className='text-5xl text-center font-serif font-medium text-cyan-600 mb-8'
                //  style={{ fontFamily: 'NordiquePro, sans-serif', fontWeight: 600 }}
            >
              Our Blogs
            </div>

            {/* Flexbox container for the cards */}
            <div className="flex flex-wrap justify-center space-x-0 sm:space-x-6 space-y-6 sm:space-y-0">
                {/* Card 1 */}
                <a href="javascript:void(0)" className="w-full sm:w-80">
                    <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
                        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                            <img
                                src="https://www.pureitwater.com/media/mageplaza/blog/post/g/r/green_flags_to_look_out_for_in_a_uv_water_purifier_4_.jpg"
                                alt="card-image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                                POPULAR
                            </div>
                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                Website Review Check
                            </h6>
                            <p className="text-slate-600 leading-normal font-light">
                                The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                and near to "Naviglio" where you can enjoy the main night life in
                                Barcelona.
                            </p>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <div>
                                <a href="#" className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Card 2 */}
                <a href="javascript:void(0)" className="w-full sm:w-80">
                    <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
                        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                            <img
                                src="https://www.pureitwater.com/media/mageplaza/blog/post/t/o/top_4_water_purifiers_of_2024_2_.jpg"
                                alt="card-image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                                POPULAR
                            </div>
                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                Website Review Check
                            </h6>
                            <p className="text-slate-600 leading-normal font-light">
                                The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                and near to "Naviglio" where you can enjoy the main night life in
                                Barcelona.
                            </p>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <div>
                                <a href="#" className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Card 3 */}
                <a href="javascript:void(0)" className="w-full sm:w-80">
                    <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
                        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                            <img
                                src="https://www.pureitwater.com/media/mageplaza/blog/post/5/_/5_simple_practices_to_prevent_water-borne_diseases_1_.jpg"
                                alt="card-image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                                POPULAR
                            </div>
                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                Website Review Check
                            </h6>
                            <p className="text-slate-600 leading-normal font-light">
                                The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                and near to "Naviglio" where you can enjoy the main night life in
                                Barcelona.
                            </p>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <div>
                                <a href="#" className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default BlogCard;
