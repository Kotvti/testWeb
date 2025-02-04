import React from 'react';
import DropdownMenu from './components/DropdownMenu';

function App() {
  return (
    <div className="App">
      <h1>Мой сайт с выпадающим списком</h1>
      <DropdownMenu />
    </div>
  );
}

export default App;


// import { useState, useEffect } from 'react'
// import { supabase } from './lib/supabase'

// function Page() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     async function getTodos() {
//       try {
//       const { data: todos } = await supabase.from('menu').select()

//       if (todos.length > 1) {
//         setTodos(todos)
//       }
//       } catch (error){
//         console.error(error);
//       }
//     }

//     getTodos()
//   }, [])

//   return (
//     <div>
//       <h1>Мой сайт с выпадающим списком</h1>
//       {todos.map((todo) => (
//         <li key={todo}>{todo}</li>
//       ))}
//     </div>
//   )
// }
// export default Page


// import React, { useState } from "react";
// import DropdownMenu from './components/DropdownMenu';

// function App() {
//   return (
//     <div className="App">
//       <h1>Мой сайт с выпадающим списком</h1>
//       <DropdownMenu />
//     </div>
//   );
// }

// export default App;


/////////////////////

// import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Box,
//   Paper,
// } from "@mui/material";

// function App() {
//   const [selectedValue, setSelectedValue] = useState("");
//   const [displayData, setDisplayData] = useState("");

//   const data = {
//     1: "Данные для значения 1",
//     2: "Данные для значения 2",
//     3: "Данные для значения 3",
//   };

//   const handleChange = (event) => {
//     const value = event.target.value;
//     setSelectedValue(value);
//     setDisplayData(data[value] || "");
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 4 }}>
//       <Typography variant="h4" component="h1" align="center" gutterBottom>
//         Тестовый сайт
//       </Typography>

//       <FormControl fullWidth sx={{ mt: 2 }}>
//         <InputLabel id="menu-label">Выберите значение</InputLabel>
//         <Select
//           labelId="menu-label"
//           value={selectedValue}
//           label="Выберите значение"
//           onChange={handleChange}
//         >
//           <MenuItem value="">
//             <em>-- Выберите --</em>
//           </MenuItem>
//           <MenuItem value={1}>Значение 1</MenuItem>
//           <MenuItem value={2}>Значение 2</MenuItem>
//           <MenuItem value={3}>Значение 3</MenuItem>
//         </Select>
//       </FormControl>

//       {displayData && (
//         <Box sx={{ mt: 4 }}>
//           <Paper elevation={3} sx={{ p: 2 }}>
//             <Typography variant="body1">{displayData}</Typography>
//           </Paper>
//         </Box>
//       )}
//     </Container>
//   );
// }

// export default App;