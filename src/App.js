import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage'
import Header from "./Components/Header/Header";
import GamePage from "./Pages/GamePage/GamePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/app/:title' element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
