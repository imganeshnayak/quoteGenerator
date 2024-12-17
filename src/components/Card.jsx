import React, { useState } from "react";

function Card() {
  const [hex, setHex] = useState("#ffffff"); // State for random color
  const [data, setData] = useState([]); // State for fetched data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

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

  // Function to fetch API data
  const fetchData = async () => {
    try {
      console.log("Fetching data...");
      setLoading(true);
      const response = await fetch("https://cat-fact.herokuapp.com/facts");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      console.log("Fetched data:", result);
      setData(result);
    } catch (err) {
      console.error("Error occurred:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
          padding: "20px",
          overflowY: "auto", // Add scrollbar if needed
        }}
      >
        <h1 style={{ textAlign: "center", color: "black" }}>Welcome!</h1>
        <p style={{ color: "black", textAlign: "center", marginBottom: "20px" }}>
          This is a card with a randomly changing background color.
        </p>

        {/* Display loading, error, or fetched data inside the card */}
        {loading && <p style={{ color: "black" }}>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {data.length > 0 && (
          <ul style={{ color: "black", listStyleType: "none", padding: 0 }}>
            {data.slice(0, 1).map((item, id) => (
              <li key={id} style={{ margin: "10px 0", textAlign: "center" }}>
                {item.text}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Button to trigger the color change */}
     {/* Button to trigger the color change and fetch data */}
<button
  onClick={() => {
    CreateColor();
    fetchData();
  }}
  style={{
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#333",
    color: "#fff",
  }}
>
  Change Color & Fetch Data
</button>


      {/* Button to trigger API fetch */}
      <button
        onClick={fetchData}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "#fff",
        }}
      >
        Fetch Cat Facts
      </button>
    </div>
  );
}

export default Card;
