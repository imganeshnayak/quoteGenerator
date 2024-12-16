import React from "react";


let colors=["0","1","2","3","4","5","6","A","B","c","d","E","f"]
let hex="#"
 
function CreateColor(){
for(let i=0;i<6;i++)
{
    const randomElement = colors[Math.floor(Math.random() * colors.length)];
    hex=hex+randomElement
}
}

CreateColor()


function Card(){
    return(
        <>
     
    <div
        style={{
          background: hex,
          padding: "50px",
          borderRadius: "10px",
        }}>
             <h1 style={{ textAlign: "center", color: hex }}>Welcome!</h1>
        <p style={{ color: "#333", textAlign: "center" }}>
          This is a simple card on a red background.
        </p>
        </div>


        </>
    );
}
export default Card


