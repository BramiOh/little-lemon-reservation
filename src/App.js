import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";

import theme from "./utils/Theme";
import "./App.css";
import router from "./router/Router";
import CustomAppBar from './components/CustomAppBar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CustomAppBar />
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
