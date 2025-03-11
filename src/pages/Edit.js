// Edit.js

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ItemForm from '../components/ItemForm';

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialName, setInitialName] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/items/${id}`);
        setInitialName(response.data.name);
      } catch (error) {
        console.error('Erro ao buscar item:', error);
      }
    };

    fetchItem();
  }, [id]);

  const handleUpdate = async (name) => {
    try {
      await axios.put(`http://localhost:3000/items/${id}`, { name });
      navigate('/');
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
    }
  };

  return (
    <div className="edit-item">
      <h2>Editar Item</h2>
      <ItemForm onSubmit={handleUpdate} initialName={initialName} />
    </div>
  );
}

export default Edit;
