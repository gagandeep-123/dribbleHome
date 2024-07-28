import React from 'react'
import Cardsani from './Cardsani';
const Designer = () => {
  return (
    <div className="flex flex-col items-center pt-20">
      <button className="font-semibold text-base rounded-3xl text-black px-4 py-3 gradient-button mt-10">
        Over 3 million ready-to-work creatives!
      </button>
      <h1 className="text-7xl max-w-3xl text-center mt-10 font-serif">
        The world’s destination for design
      </h1>
      <p className="mt-10 text-xl">
        Get inspired by the work of millions of top-rated designers & agencies
        around the world.
      </p>
      <button className="mt-8 bg-black text-white px-4 py-3 rounded-3xl text-base font-semibold">
        Get Started
      </button>
    </div>
  );
}

export default Designer