import { CssBaseline, ThemeProvider } from "@mui/material";
import Buttombar from "./components/header/Buttombar"
import Searchbar from "./components/header/Searchbar"
import Topbar from "./components/header/Topbar"
import { ColorModeContext, useMode } from "./theme"




function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Topbar/>
    <Searchbar/>
    <Buttombar/>  
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
