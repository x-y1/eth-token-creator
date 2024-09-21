import React from 'react';

const CubeSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="cube relative w-24 h-24">
        <div className="front absolute w-full h-full bg-white bg-opacity-80 border border-gray-300"></div>
        <div className="back absolute w-full h-full bg-white bg-opacity-80 border border-gray-300"></div>
        <div className="left absolute w-full h-full bg-white bg-opacity-80 border border-gray-300"></div>
        <div className="right absolute w-full h-full bg-white bg-opacity-80 border border-gray-300"></div>
        <div className="top absolute w-full h-full bg-white bg-opacity-80 border border-gray-300"></div>
        <div className="bottom absolute w-full h-full bg-white bg-opacity-80 border border-gray-300"></div>
      </div>

      <style jsx>{`
        .cube {
          transform-style: preserve-3d;
          transform: rotateX(0deg) rotateY(0deg);
          animation: rotate-cube 5s infinite linear;
        }
        .cube div {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid #ccc;
        }
        .front  { transform: translateZ(48px); }
        .back   { transform: rotateY(180deg) translateZ(48px); }
        .left   { transform: rotateY(-90deg) translateZ(48px); }
        .right  { transform: rotateY(90deg) translateZ(48px); }
        .top    { transform: rotateX(90deg) translateZ(48px); }
        .bottom { transform: rotateX(-90deg) translateZ(48px); }

        @keyframes rotate-cube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CubeSpinner;
