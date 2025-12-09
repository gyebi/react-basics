import './App.css'
import { useState } from 'react'
import ProductCard from './components/ProductCard'

const initialProducts = [
  { id: 1, name: 'Wireless Mouse', price: 25, category: 'Tech', image: 'https://m.media-amazon.com/images/I/51KmxQjXBlL.jpg', isFavorite: false},
  { id: 2, name: 'Yoga Mat', price: 30, category: 'Sports', image: 'https://contents.mediadecathlon.com/p2940263/35882e04dabfa82b8a54e41f85119cfe87eb4a9e6a55f0d3058a654412de0533/lightweight-yoga-mat-180-x-50-cm-dark-blue.jpg?format=auto', isFavorite: false},
  { id: 3, name: 'Coffee Maker', price: 80, category: 'Home', image: 'https://www.krupsusa.com/medias/?context=bWFzdGVyfGltYWdlc3wzNTI5NDd8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3dZeTlvT1Rndk1qZzRPVE0yTlRrek9UZ3hOelF8OTc5YzRhYThhZjQyMzAzZTljMmEzYTRiZGQxN2YwZGZlY2M5YmJkZjYwZjc1Yjg1ZTY0MTMxOGQwNGE0Zjc3NQ', isFavorite: false},
  { id: 4, name: 'Headphones', price: 60, category: 'Tech', image: 'https://m.media-amazon.com/images/I/610ub5kytVL.jpg', isFavorite: false}
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');

  const categories = ['All', 'Tech', 'Home', 'Sports'];

  const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter);

  const handleToggleFavorite = (id) => {
    const updated = products.map(p => p.id === id ? {...p, isFavorite: !p.isFavorite} : p);
    setProducts(updated);
  };

    const visibleProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='app'>
      <h1>🛍️ Product Gallery</h1>
      <input type="text" placeholder='Search product...' value={query} onChange={e => setQuery(e.target.value)} />
      <div className='filters'>
        {categories.map(cat => (
          <button key={cat} className={filter === cat ? 'active' : ''} onClick={() => setFilter(cat)}>{cat}</button>
        ))}
      </div>

      <div className='grid'>
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} onToggleFavorite={handleToggleFavorite}/>
        ))}
      </div>
    </div>
  )
}

export default App