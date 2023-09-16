import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MockPage from "./features/mock-page/mock-page";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MockPage></MockPage>} />
      </Routes>
    </Router>
  );
};

export default App;
