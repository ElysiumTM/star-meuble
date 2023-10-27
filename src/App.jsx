import "./App.css";
import React from "react";
import Home from "./components/Home";
import FurnitureList from './components/FurnitureList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CupboardList from "./components/CupboardList";
import ShelfList from "./components/ShelfList";
import CreateFurniturDrawer from "./components/CreateFurnitureDrawer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FurnitureList />} />
        <Route path="/cupboard" element={<CupboardList />} />
        <Route path="/shelf" element={<ShelfList />} />
        <Route path="/create" element={<CreateFurniturDrawer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
