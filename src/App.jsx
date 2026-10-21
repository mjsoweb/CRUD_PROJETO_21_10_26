// src/App.jsx

import { BrowserRouter as Router } from 'react-router-dom';

// Versão anterior com armazenamento local
// import AppRoutes from "./routes/AppRoutes.jsx";

// Nova versão com backend
import AppRoutes from './routes/AppRoutesBack.jsx';

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
