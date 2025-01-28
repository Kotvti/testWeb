import React, { useState } from "react";
import {
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Paper,
} from "@mui/material";

function App() {
  const [selectedValue, setSelectedValue] = useState("");
  const [displayData, setDisplayData] = useState("");

  const data = {
    1: "Данные для значения 1",
    2: "Данные для значения 2",
    3: "Данные для значения 3",
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    setDisplayData(data[value] || "");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Тестовый сайт
      </Typography>

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel id="menu-label">Выберите значение</InputLabel>
        <Select
          labelId="menu-label"
          value={selectedValue}
          label="Выберите значение"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>-- Выберите --</em>
          </MenuItem>
          <MenuItem value={1}>Значение 1</MenuItem>
          <MenuItem value={2}>Значение 2</MenuItem>
          <MenuItem value={3}>Значение 3</MenuItem>
        </Select>
      </FormControl>

      {displayData && (
        <Box sx={{ mt: 4 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="body1">{displayData}</Typography>
          </Paper>
        </Box>
      )}
    </Container>
  );
}

export default App;