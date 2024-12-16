import React, { useState } from "react";

function Card() {
  // State to store the current hex color
  const [hex, setHex] = useState("#ffffff");

  // Function to generate a random color
  const CreateColor = () => {
    const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let newHex = "#";
    for (let i = 0; i < 6; i++) {
      const randomElement = colors[Math.floor(Math.random() * colors.length)];
      newHex += randomElement;
    }
    setHex(newHex); // Update the state with the new hex color
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* The card with dynamic background color */}
      <div
        style={{
          background: hex,
          width: "75vh",
          height: "75vh",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#fff" }}>Welcome!</h1>
        <p style={{ color: "#fff", textAlign: "center" }}>
          This is a card with a randomly changing background color.
        </p>
      </div>
      
      {/* Button to trigger the color change */}
      <button
        onClick={CreateColor}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: hex,
          color: "#fff",
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default Card;
