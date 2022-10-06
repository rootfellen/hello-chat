import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import Loader from "./components/Loader/Loader";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "./main";
const theme = createTheme({
  palette: {
    primary: {
      light: "#80cbc4",
      main: "#009688",
      dark: "#004d40",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <AppRouter />
      </ThemeProvider>
    </Router>
  );
}

export default App;
