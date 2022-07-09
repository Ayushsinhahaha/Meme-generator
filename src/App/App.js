import React from "react";
import { Meme } from "../Meme/Meme";
import { Router, Routes, Route } from "react-router-dom";
import { MemeGenerated } from "../MemeGenerated/MemeGenerated";
import styles from './styles.module.css';

export const App = () => {
  return (
    <div>
    <h1>Meme Creator</h1>
    <Routes>
    <Route path="/" element={<Meme/>} />
    <Route path="/generated" element={<MemeGenerated/>} />
    </Routes>
    
    </div>
  );
};
