"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Props {}

const Popup2: NextPage<Props> = () => {
  const [isShow, setIsShow] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  console.log("🚀 ~ showPopup:", showPopup);
  const [intensity, setIntensity] = useState(1); // Intensity level for scary effects

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const handleNoClick = () => {
    setIntensity((prev) => prev + 1);
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
    //   style={{
    //     backgroundColor: "#000",
    //     color: "#fff",
    //     height: "100vh",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     overflow: "hidden",
    //     zIndex: 0,
    //   }}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
    >
      {showPopup && (
        <>
          <img
            src="/crak.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div
            style={{
              position: "relative",
              width: "400px",
              padding: "20px",
              backgroundColor: `rgba(17, 17, 17, ${Math.min(
                0.9,
                intensity * 0.1
              )})`,
              border: `${Math.min(5, intensity)}px solid #ff0000`,
              borderRadius: "10px",
              boxShadow: `0 0 ${intensity * 10}px rgba(255, 0, 0, 0.7)`,
              textAlign: "center",
              transform: `scale(${1 + intensity * 0.05}) rotate(${
                Math.random() * intensity
              }deg)`,
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
                }), rgba(0,0,0,0.8)), url(/crack-texture.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -1,
                filter: `blur(${intensity}px)`,
              }}
            ></div>

            <h1
              style={{
                fontSize: `${24 + intensity * 2}px`,
                color: "#fff",
                textShadow: `${intensity}px ${intensity}px ${
                  intensity * 2
                }px #ff0000`,
                marginBottom: "20px",
              }}
            >
              อยากไปเที่ยวไหม?
            </h1>

            <div>
              <button
                onClick={handleYesClick}
                style={{
                  marginRight: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#ff0000",
                  border: "none",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  cursor: "pointer",
                  textShadow: "1px 1px 2px #000",
                  boxShadow: `0 0 ${intensity * 5}px rgba(255, 0, 0, 0.7)`,
                }}
              >
                ไปเลย
              </button>
              <button
                onClick={handleNoClick}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#555",
                  border: "none",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  cursor: "pointer",
                  opacity: Math.max(0.5, 1 - intensity * 0.1),
                }}
              >
                ปิด
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Popup2;
