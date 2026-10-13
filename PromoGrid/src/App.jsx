import AppRouter from "./routes/AppRouter";
import { ThemeProvider } from "./context/ThemeContext";

import "./styles/global.css";
import "./styles/layout.css";

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
