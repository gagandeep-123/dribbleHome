import React from 'react'

const JoinDribble = () => {
    return (
      <div className="flex flex-col items-center pt-20 bg-[#ffda79] w-full mt-14">
        <h1 className="text-6xl mx-auto font-serif max-w-lg mt-15 text-center w-1/3">
          Find your next designer today
        </h1>
        <p className="max-w-lg mt-8 mx-auto text-xl leading-9 text-center">
          The world’s leading brands use Dribbble to hire creative talent.
          Browse millions of top-rated portfolios to find your perfect creative
          match.
        </p>
        <div className="pt-10 flex relative">
          <button className="bg-black text-white rounded-3xl flex h-14 items-center mr-6 px-4 py-3">
            Get started now
          </button>
          <button className="bg-white text-black rounded-3xl flex h-14 items-center px-4 py-3">
            Learn about hiring
          </button>
        </div>
        <p className="mt-10 mb-10 mx-auto leading-9 text-xl max-w-screen-sm">
          Are you a designer? <a className="underline-offset-2"><u>JoinDribble</u></a>
        </p>
      </div>
    );
}

export default JoinDribble