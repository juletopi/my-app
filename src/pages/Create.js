// Create.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ItemForm from '../components/ItemForm';

function Create() {
  const navigate = useNavigate();

  const handleCreate = async (name) => {
    try {
      await axios.post('http://localhost:3000/items', { name });
      navigate('/');
    } catch (error) {
      console.error('Erro ao criar item:', error);
    }
  };

  return (
    <div className="create-item">
      <h2>Adicionar Item</h2>
      <ItemForm onSubmit={handleCreate} />
    </div>
  );
}

export default Create;