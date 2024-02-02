import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

export default function App() {
  const [items, setItems] = useState([]);

  function handleClear() {
    const confirm = window.confirm('You sure to delete all?');
    if (confirm) setItems([]);
  }

  function handleAtItems(item) {
    setItems(it => [...it, item]); //Because we can't mutate, we need to spread the original and add naother value
  }

  function handleDeleteItem(id) {
    setItems(it => it.filter(it => it.id !== id)); //Crea un nuevo array de items con todos los elementos excepto el que le pasamos como id
  }

  function handleToggleItem(id) {
    setItems(it =>
      it.map(it => (it.id === id ? { ...it, packed: !it.packed } : it))
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAtItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
