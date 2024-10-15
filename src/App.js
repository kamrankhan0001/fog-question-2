
import React, { useState, useEffect } from "react";
import './App.css'; // We'll include the CSS here as well

const App = () => {
  const rows = 15; // Number of rows
  const cols = 20; // Number of columns

  // Utility function to create an empty grid
  const createEmptyGrid = (rows, cols) => {
    return Array.from({ length: rows }, () => Array(cols).fill(""));
  };

  const [grid, setGrid] = useState(createEmptyGrid(rows, cols));

  //Function to get a random color for the rain drop
  const getRandomColor = () => {
    const colors = ['#1B4F72', '#641E16', '#1D8348', '#9A7D0A', '#6C3483'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  

  // Function to update the grid with falling rain effect
  const updateRainGrid = () => {
    let newGrid = [...grid];

    // Shift rows down
    for (let row = rows - 1; row > 0; row--) {
      newGrid[row] = [...newGrid[row - 1]];
    }

    // Add new drop at random position in the top row
    const randomCol = Math.floor(Math.random() * cols);
    newGrid[0] = Array(cols).fill(""); // Clear the top row
    newGrid[0][randomCol] = getRandomColor(); // Add random colored drop in random column

    setGrid(newGrid);
  };

  // useEffect hook to make the grid update periodically
  useEffect(() => {
    const interval = setInterval(() => {
      updateRainGrid();
    }, 100); // Adjust timing for drop speed

    return () => clearInterval(interval);
  }, [grid]);

  return (
    <div className="rain-grid">
      {grid.map((row, rowIndex) =>
        row.map((color, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="rain-cell"
            style={{ backgroundColor: color }}
          ></div>
        ))
      )}
    </div>
  );
};

export default App;



// import React, { useState, useEffect } from "react";
// import './App.css'; // We'll include the CSS here as well

// const App = () => {
//   const rows = 15; // Number of rows
//   const cols = 20; // Number of columns
//   const numDrops = 5; // Number of raindrops to fall at once

//   // Utility function to create an empty grid
//   const createEmptyGrid = (rows, cols) => {
//     return Array.from({ length: rows }, () => Array(cols).fill(""));
//   };

//   const [grid, setGrid] = useState(createEmptyGrid(rows, cols));

//   // Function to get a random color for the rain drop
//   const getRandomColor = () => {
//     const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6'];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   // Function to update the grid with falling rain effect
//   const updateRainGrid = () => {
//     let newGrid = [...grid];

//     // Shift rows down
//     for (let row = rows - 1; row > 0; row--) {
//       newGrid[row] = [...newGrid[row - 1]];
//     }

//     // Add 5 drops at random positions in the top row
//     let newTopRow = Array(cols).fill(""); // Clear the top row
//     for (let i = 0; i < numDrops; i++) {
//       const randomCol = Math.floor(Math.random() * cols);
//       newTopRow[randomCol] = getRandomColor(); // Add random colored drop in random column
//     }

//     newGrid[0] = newTopRow; // Set the updated top row

//     setGrid(newGrid);
//   };

//   // useEffect hook to make the grid update periodically
//   useEffect(() => {
//     const interval = setInterval(() => {
//       updateRainGrid();
//     }, 200); // Adjust timing for drop speed

//     return () => clearInterval(interval);
//   }, [grid]);

//   return (
//     <div className="rain-grid">
//       {grid.map((row, rowIndex) =>
//         row.map((color, colIndex) => (
//           <div
//             key={`${rowIndex}-${colIndex}`}
//             className="rain-cell"
//             style={{ backgroundColor: color }}
//           ></div>
//         ))
//       )}
//     </div>
//   );
// };

// export default App;


