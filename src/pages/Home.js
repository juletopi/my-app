// Home.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/items');
        setItems(response.data);
      } catch (error) {
        console.error('Erro ao buscar itens:', error);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/items/${id}`);
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Erro ao deletar item:', error);
    }
  };

  return (
    <div className="home">
      {items.map(item => (
        <ItemCard key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Home;