import React from 'react'

const Prize = () => {
  return (
    <div id='prize' className="bg-black text-green-400 font-mono min-h-screen p-8 flex flex-col items-center gap-6 box-border">
      <h1 className="text-4xl mb-4 text-center text-green-500 drop-shadow-[0_0_10px_#00ff00] drop-shadow-[0_0_20px_#39ff14]">
        Prize Pool: ₹15,000
      </h1>

      <div className="max-w-md w-full flex flex-row gap-4 justify-center text-center">
        <div className="flex-1 border-2 border-green-400 rounded-lg p-6 font-mono text-green-400 text-center shadow-[0_0_15px_#00ff00] cursor-default transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#00ff00]">
          <p className="m-0 text-xl">1st Prize: ₹6,000</p>
        </div>
        <div className="flex-1 border-2 border-green-400 rounded-lg p-6 font-mono text-green-400 text-center shadow-[0_0_15px_#00ff00] cursor-default transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#00ff00]">
          <p className="m-0 text-xl">2nd Prize: ₹4,000</p>
        </div>
        <div className="flex-1 border-2 border-green-400 rounded-lg p-6 font-mono text-green-400 text-center shadow-[0_0_15px_#00ff00] cursor-default transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#00ff00]">
          <p className="m-0 text-xl">3rd Prize: ₹2,000</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-8 max-w-md w-full">
        <div className="border-2 border-green-400 rounded-lg p-6 font-mono text-green-400 text-center shadow-[0_0_15px_#00ff00] cursor-default transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#00ff00]">
          <p className="m-0 text-xl">Domain Winners (3 Domains): ₹1,000 each</p>
        </div>

        <div className="border-2 border-green-400 rounded-lg p-6 shadow-[0_0_15px_#00ff00] bg-[#111] text-green-500 font-mono drop-shadow-[0_0_8px_#00ff00] drop-shadow-[0_0_20px_#39ff14] text-center">
          <h2 className="m-0 mb-2 text-2xl">Registration Fees & Offers</h2>
          <p className="m-0 text-xl">Early Bird Offer: ₹200/team (Limited to first 20 teams)</p>
          <p className="m-0 text-xl">Registration Fees: ₹300/team (After Early Bird Offer)</p>
        </div>
      </div>
    </div>
  )
}

export default Prize