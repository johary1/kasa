import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import DetailHome from "./pages/DetailHome";
import data from "../src/data/room.json";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {data.rooms.map((room) => (
          <Route
            key={room.id}
            path={`/room-${room.id}`}
            element={<DetailHome room={room} />}
          />
        ))}

        {/* page 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
