// ItemCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ItemCard({ item, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm('Tem certeza que deseja excluir este item?')) {
      try {
        await axios.delete(`http://localhost:3000/items/${item.id}`);
        onDelete(item.id);
      } catch (error) {
        console.error('Erro ao excluir item:', error);
      }
    }
  };

  return (
    <div className="item-card">
      <h2>{item.id}: {item.name}</h2>
      <Link to={`/edit/${item.id}`} className="btn">Editar</Link>
      <button onClick={handleDelete} className="btn btn-danger">Excluir</button>
    </div>
  );
}

export default ItemCard;