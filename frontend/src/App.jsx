import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Buttombar from "./components/header/Buttombar"
import Searchbar from "./components/header/Searchbar"
import Topbar from "./components/header/Topbar"
import { ColorModeContext, useMode } from "./theme"
import Hero from "./components/hero/Hero";
import Main from './components/main/Main';
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";




function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Topbar/>
    <Searchbar/>
    <Buttombar/>  

    <Box bgcolor={theme.palette.bg.main}>
      <Hero/>
      <Main/>
    </Box>

    <Footer/>
    <ScrollToTop/>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
