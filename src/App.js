import { ThemeProvider } from "@mui/material";

import CustomAppBar from "./components/CustomAppBar";
import theme from "./utils/Theme";
import "./App.css";
import Home from "./views/Home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CustomAppBar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
