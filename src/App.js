import React from 'react';
import Calculator from './components/Calculator';
import { Routes, Route, Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
function App() {
  return (
    <>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
</Routes>

    <Calculator />
    </>
  );
}

export default App;
