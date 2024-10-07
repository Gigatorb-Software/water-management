import React from 'react';
 

const Card = () => {
  return (
    <>

{/* <div className="flex justify-center space-x-6">

<div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="relative p-3.5 h-96 overflow-hidden rounded-xl bg-clip-border">
    <img
      src="/kent.jpg.webp"
      alt="card-image"
      className="h-full w-80% object-cover rounded-md"
    />
  </div>
  <div className="p-4">
    <div className="mb-2 flex items-center justify-between">
      <p className="text-slate-800 text-xl font-semibold">
        Apple AirPods
      </p>
      <p className="text-cyan-600 text-xl font-semibold">
        $95.00
      </p>
    </div>
    <p className="text-slate-600 leading-normal font-light">
      With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case.
    </p>
    <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add to Cart
    </button>
  </div>
</div>

<div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="relative p-3.5 h-96 overflow-hidden rounded-xl bg-clip-border">
    <img
      src="/kent.jpg.webp"
      alt="card-image"
      className="h-full w-70% object-cover rounded-md"
    />
  </div>
  <div className="p-4">
    <div className="mb-2 flex items-center justify-between">
      <p className="text-slate-800 text-xl font-semibold">
        Apple AirPods
      </p>
      <p className="text-cyan-600 text-xl font-semibold">
        $95.00
      </p>
    </div>
    <p className="text-slate-600 leading-normal font-light">
      With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case.
    </p>
    <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add to Cart
    </button>
  </div>
</div>

<div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="relative p-3.5 h-96 overflow-hidden rounded-xl bg-clip-border">
    <img
      src="/kent.jpg.webp"
      alt="card-image"
      className="h-full w-full object-cover rounded-md"
    />
  </div>
  <div className="p-4">
    <div className="mb-2 flex items-center justify-between">
      <p className="text-slate-800 text-xl font-semibold">
        Apple AirPods
      </p>
      <p className="text-cyan-600 text-xl font-semibold">
        $95.00
      </p>
    </div>
    <p className="text-slate-600 leading-normal font-light">
      With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case.
    </p>
    <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add to Cart
    </button>
  </div>
</div>

</div> */}

<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Card 1 */}
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
      <div className="relative p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/kent.jpg.webp"
          alt="Apple AirPods"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-xl font-semibold">Apple AirPods</p>
          <p className="text-cyan-600 text-xl font-semibold">$95.00</p>
        </div>
        <p className="text-slate-600 leading-normal font-light">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </p>
        <button
          className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
    
    {/* Repeat similar card structures as needed */}
    
    {/* Card 2 */}
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
      <div className="relative p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/kent.jpg.webp"
          alt="Apple AirPods"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-xl font-semibold">Apple AirPods</p>
          <p className="text-cyan-600 text-xl font-semibold">$95.00</p>
        </div>
        <p className="text-slate-600 leading-normal font-light">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </p>
        <button
          className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
    
    {/* Card 3 */}
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
      <div className="relative p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/kent.jpg.webp"
          alt="Apple AirPods"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-xl font-semibold">Apple AirPods</p>
          <p className="text-cyan-600 text-xl font-semibold">$95.00</p>
        </div>
        <p className="text-slate-600 leading-normal font-light">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </p>
        <button
          className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
    
    {/* Add more cards as needed */}
    
  </div>
</div>



{/* <div className="flex justify-center space-x-6">

<div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="relative p-3.5 h-96 overflow-hidden rounded-xl bg-clip-border">
    <img
      src="/kent.jpg.webp"
      alt="card-image"
      className="h-full w-80% object-cover rounded-md"
    />
  </div>
  <div className="p-4">
    <div className="mb-2 flex items-center justify-between">
      <p className="text-slate-800 text-xl font-semibold">
        Apple AirPods
      </p>
      <p className="text-cyan-600 text-xl font-semibold">
        $95.00
      </p>
    </div>
    <p className="text-slate-600 leading-normal font-light">
      With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case.
    </p>
    <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add to Cart
    </button>
  </div>
</div>

<div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="relative p-3.5 h-96 overflow-hidden rounded-xl bg-clip-border">
    <img
      src="/kent.jpg.webp"
      alt="card-image"
      className="h-full w-70% object-cover rounded-md"
    />
  </div>
  <div className="p-4">
    <div className="mb-2 flex items-center justify-between">
      <p className="text-slate-800 text-xl font-semibold">
        Apple AirPods
      </p>
      <p className="text-cyan-600 text-xl font-semibold">
        $95.00
      </p>
    </div>
    <p className="text-slate-600 leading-normal font-light">
      With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case.
    </p>
    <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add to Cart
    </button>
  </div>
</div>

<div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="relative p-3.5 h-96 overflow-hidden rounded-xl bg-clip-border">
    <img
      src="/kent.jpg.webp"
      alt="card-image"
      className="h-full w-full object-cover rounded-md"
    />
  </div>
  <div className="p-4">
    <div className="mb-2 flex items-center justify-between">
      <p className="text-slate-800 text-xl font-semibold">
        Apple AirPods
      </p>
      <p className="text-cyan-600 text-xl font-semibold">
        $95.00
      </p>
    </div>
    <p className="text-slate-600 leading-normal font-light">
      With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case.
    </p>
    <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add to Cart
    </button>
  </div>
</div>

</div> */}


<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Card 1 */}
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
      <div className="relative p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/kent.jpg.webp"
          alt="Apple AirPods"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-xl font-semibold">Apple AirPods</p>
          <p className="text-cyan-600 text-xl font-semibold">$95.00</p>
        </div>
        <p className="text-slate-600 leading-normal font-light">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </p>
        <button
          className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
    
    {/* Repeat similar card structures as needed */}
    
    {/* Card 2 */}
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
      <div className="relative p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/kent.jpg.webp"
          alt="Apple AirPods"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-xl font-semibold">Apple AirPods</p>
          <p className="text-cyan-600 text-xl font-semibold">$95.00</p>
        </div>
        <p className="text-slate-600 leading-normal font-light">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </p>
        <button
          className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
    
    {/* Card 3 */}
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
      <div className="relative p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/kent.jpg.webp"
          alt="Apple AirPods"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-xl font-semibold">Apple AirPods</p>
          <p className="text-cyan-600 text-xl font-semibold">$95.00</p>
        </div>
        <p className="text-slate-600 leading-normal font-light">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </p>
        <button
          className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
    
    {/* Add more cards as needed */}
    
  </div>
</div>


{/* <div className="flex justify-center space-x-6">

<div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="relative p-3.5 h-96 overflow-hidden rounded-xl bg-clip-border">
    <img
      src="/kent.jpg.webp"
      alt="card-image"
      className="h-full w-80% object-cover rounded-md"
    />
  </div>
  <div className="p-4">
    <div className="mb-2 flex items-center justify-between">
      <p className="text-slate-800 text-xl font-semibold">
        Apple AirPods
      </p>
      <p className="text-cyan-600 text-xl font-semibold">
        $95.00
      </p>
    </div>
    <p className="text-slate-600 leading-normal font-light">
      With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case.
    </p>
    <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add to Cart
    </button>
  </div>
</div>

<div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="relative p-3.5 h-96 overflow-hidden rounded-xl bg-clip-border">
    <img
      src="/kent.jpg.webp"
      alt="card-image"
      className="h-full w-70% object-cover rounded-md"
    />
  </div>
  <div className="p-4">
    <div className="mb-2 flex items-center justify-between">
      <p className="text-slate-800 text-xl font-semibold">
        Apple AirPods
      </p>
      <p className="text-cyan-600 text-xl font-semibold">
        $95.00
      </p>
    </div>
    <p className="text-slate-600 leading-normal font-light">
      With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case.
    </p>
    <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add to Cart
    </button>
  </div>
</div>

<div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="relative p-3.5 h-96 overflow-hidden rounded-xl bg-clip-border">
    <img
      src="/kent.jpg.webp"
      alt="card-image"
      className="h-full w-full object-cover rounded-md"
    />
  </div>
  <div className="p-4">
    <div className="mb-2 flex items-center justify-between">
      <p className="text-slate-800 text-xl font-semibold">
        Apple AirPods
      </p>
      <p className="text-cyan-600 text-xl font-semibold">
        $95.00
      </p>
    </div>
    <p className="text-slate-600 leading-normal font-light">
      With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case.
    </p>
    <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add to Cart
    </button>
  </div>
</div>

</div> */}

<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Card 1 */}
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
      <div className="relative p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/kent.jpg.webp"
          alt="Apple AirPods"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-xl font-semibold">Apple AirPods</p>
          <p className="text-cyan-600 text-xl font-semibold">$95.00</p>
        </div>
        <p className="text-slate-600 leading-normal font-light">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </p>
        <button
          className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
    
    {/* Repeat similar card structures as needed */}
    
    {/* Card 2 */}
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
      <div className="relative p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/kent.jpg.webp"
          alt="Apple AirPods"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-xl font-semibold">Apple AirPods</p>
          <p className="text-cyan-600 text-xl font-semibold">$95.00</p>
        </div>
        <p className="text-slate-600 leading-normal font-light">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </p>
        <button
          className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
    
    {/* Card 3 */}
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
      <div className="relative p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/kent.jpg.webp"
          alt="Apple AirPods"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-xl font-semibold">Apple AirPods</p>
          <p className="text-cyan-600 text-xl font-semibold">$95.00</p>
        </div>
        <p className="text-slate-600 leading-normal font-light">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </p>
        <button
          className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
    
    {/* Add more cards as needed */}
    
  </div>
</div>


    </>
  )
}

export default Card
