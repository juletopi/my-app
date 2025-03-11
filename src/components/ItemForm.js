// ItemForm.js

import React, { useState } from 'react';

function ItemForm({ onSubmit, initialName = '' }) {
  const [name, setName] = useState(initialName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <label htmlFor="name">Nome do Item:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary">Salvar</button>
    </form>
  );
}

export default ItemForm;