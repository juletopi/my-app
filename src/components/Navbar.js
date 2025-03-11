// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Lista de Itens</h1>
      <Link to="/create" className="btn">Adicionar Item</Link>
    </nav>
  );
}

export default Navbar;