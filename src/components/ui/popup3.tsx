"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const images = ["/grunge_cracked_texture_background_1307.jpg"]; // Array of crack images

const texts = [
  "ไปเที่ยวกันไหม?",
  "ไปเที่ยวนะ",
  "ไปสนุกกันดีกว่า",
  "ไม่ไปจริงๆหรอ?",
  "เพื่อนๆ รออยู่ \n รีบไปกันเถอะ!",
  // "อย่าดื้อ \n ไปเที่ยวกัน \n  ลุยยย!",
];

const maxCount = 17;

const Popup3: NextPage = () => {
  const [isShow, setIsShow] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [intensity, setIntensity] = useState(13); // Intensity level for scary effects
  console.log("🚀 ~ intensity:", intensity);
  const [imageIndex, setImageIndex] = useState(0); // Index of the current crack image
  const [textIndex, setTextIndex] = useState(0); // Index of the current text
  const [showWink, setShowWink] = useState(false);
  const [isClickConfirm, setIsClickConfirm] = useState(false);
  console.log("🚀 ~ isClickConfirm:", isClickConfirm);
  const isLast = intensity === maxCount;

  useEffect(() => {
    if (isLast) {
      const timer = setTimeout(() => {
        setShowWink(true);
      }, 3000); // Wait for 3 seconds

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [isLast]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleNoClick = () => {
    if (intensity < maxCount) {
      setIntensity((prev) => prev + 1);
      setImageIndex((prev) => (prev + 1) % images.length); // Change to the next image
      setTextIndex((prev) => (prev + 1) % texts.length); // Change to the next text
    }
  };

  const handleYesClick = () => {
    alert("You're brave! Let's go!");
    setShowPopup(false);
  };

  if (!isShow) {
    return null;
  }

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden ${
        isLast && "bg-[#3fb0fc]"
      }`}
    >
      {showPopup && (
        <>
          {/* Background Image */}
          {isLast ? (
            <>
              <img
                src="/airplane.png"
                alt=""
                width={400}
                // height={100}
                height={200}
                className={`absolute bottom-[0px] left-10  object-cover z-20  airplane animate-bounce`}
              />

              <img
                src={"/8697527.jpg"}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-no-repeat scroll-background "
                style={{
                  filter: isLast ? "" : `blur(${intensity * 0.5}px)`,
                  // transform: `scale(${1 + intensity * 0.01}) rotate(${
                  //   Math.random() * intensity
                  // }deg)`,
                }}
              />
            </>
          ) : (
            <>
              <img
                src={images[imageIndex]}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-no-repeat"
                style={{
                  filter: `blur(${intensity * 0.5}px)`,
                  transform: `scale(${1 + intensity * 0.01}) rotate(${
                    Math.random() * intensity
                  }deg)`,
                }}
              />
            </>
          )}

          {!isLast && (
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-0"></div>
          )}
          {/* Popup */}
          {isLast ? (
            <>
              <div
                className="-mt-[400px] z-50 relative  p-6 bg-opacity-90 bg-blue-200 border-4 border-white rounded-lg shadow-lg"
                style={{
                  // isLast not rotate the text
                  transform: `scale(${
                    1 + (isLast ? 0 : intensity * 0.01)
                  }) rotate(${isLast ? 0 : Math.random() * intensity}deg)`,

                  // transform: `scale(${1 + intensity * 0.01}) rotate(${
                  //   Math.random() * intensity
                  // }deg)`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // backgroundImage: `radial-gradient(rgba(204,75,99,${
                    //  1 * intensity
                    // }), rgba(0,0,0,0.8))`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -1,
                    filter: `blur(${intensity}px)`,
                  }}
                ></div>

                <h1
                  className="text-white text-center mb-5 whitespace-pre-line font-bold"
                  style={{
                    fontSize: `${24 + intensity * 2}px`,
                    textShadow: `0px 2px 4px #000000`,
                  }}
                >
                  {texts[textIndex]}
                </h1>

                {/* <div className="flex justify-around gap-4">
                  <button
                    onClick={handleYesClick}
                    className={`px-4 py-2 bg-red-600 text-white font-bold rounded shadow-md hover:bg-red-700 transition-all 
                  ${intensity === maxCount ? "glow bg-green-500" : ""}
                  `}
                    style={{
                      textShadow: "1px 1px 2px #000",
                      boxShadow: `0 0 ${intensity * 5}px rgba(255, 0, 0, 0.7)`,
                    }}
                  >
                    ไปเลย
                  </button>
                  <button
                    onClick={handleNoClick}
                    className="px-4 py-2 bg-gray-600 text-white font-bold rounded shadow-md hover:bg-gray-700 transition-all"
                    style={{
                      opacity: Math.max(0.5, 1 - intensity * 0.1),
                    }}
                  >
                    ปิด
                  </button>
                </div> */}
              </div>
              <img
                onClick={() => {
                  setIsClickConfirm(true);
                }}
                src="/button-removebg-preview.png"
                alt=""
                // width={3000}
                // height={100}
                // height={3000}
                width={300}
                height={300}
                className={`absolute  top-[360px]  object-cover  hover:scale-105 duration-300 cursor-pointer active:scale-90 focus:scale-105 focus-visible:scale-110 z-10 ${
                  showWink ? "opacity-100" : "opacity-0"
                } `}
              />
              <img
                src="/2682.png"
                alt=""
                // width={3000}
                // height={100}
                // height={3000}
                className={`absolute  top-[600px]  object-cover  animate-pulse z-10 ${
                  showWink ? "opacity-100" : "opacity-0"
                } `}
              />
            </>
          ) : (
            <>
              <div
                className="z-50 relative  p-6 bg-opacity-90 bg-black border border-red-500 rounded-lg shadow-lg"
                style={{
                  // isLast not rotate the text
                  transform: `scale(${
                    1 + (isLast ? 0 : intensity * 0.01)
                  }) rotate(${isLast ? 0 : Math.random() * intensity}deg)`,

                  // transform: `scale(${1 + intensity * 0.01}) rotate(${
                  //   Math.random() * intensity
                  // }deg)`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `radial-gradient(rgba(255,0,0,${
                      0.2 * intensity
                    }), rgba(0,0,0,0.8))`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -1,
                    filter: `blur(${intensity}px)`,
                  }}
                ></div>

                <h1
                  className="text-white text-center mb-5 whitespace-pre-line"
                  style={{
                    fontSize: `${24 + intensity * 2}px`,
                    textShadow: `${intensity}px ${intensity}px ${
                      intensity * 2
                    }px #ff0000`,
                  }}
                >
                  {texts[textIndex]}
                </h1>

                <div className="flex justify-around gap-4">
                  <button
                    onClick={handleYesClick}
                    className={`px-4 py-2 bg-red-600 text-white font-bold rounded shadow-md hover:bg-red-700 transition-all 
                  ${intensity === maxCount ? "glow bg-green-500" : ""}
                  `}
                    style={{
                      textShadow: "1px 1px 2px #000",
                      boxShadow: `0 0 ${intensity * 5}px rgba(255, 0, 0, 0.7)`,
                    }}
                  >
                    ไปเลย
                  </button>
                  <button
                    onClick={handleNoClick}
                    className="px-4 py-2 bg-gray-600 text-white font-bold rounded shadow-md hover:bg-gray-700 transition-all"
                    style={{
                      opacity: Math.max(0.5, 1 - intensity * 0.1),
                    }}
                  >
                    ปิด
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Popup3;
