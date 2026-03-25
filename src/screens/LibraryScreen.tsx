import React, { useState } from 'react';
import { Search, SlidersHorizontal, Plus } from 'lucide-react';
import { BookCard } from '../components/BookCard';
import { MOCK_BOOKS } from '../constants';
import { Book } from '../types';

interface LibraryScreenProps {
  onBookClick: (book: Book) => void;
  onAddClick: () => void;
}

export const LibraryScreen: React.FC<LibraryScreenProps> = ({ onBookClick, onAddClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Books');

  const categories = ['All Books', 'Fiction', 'Sci-Fi', 'Biography', 'Mystery', 'Poetry', 'Philosophy'];

  const filteredBooks = MOCK_BOOKS.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All Books' || book.genres.includes(activeCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
      {/* Search & Filter */}
      <section className="mb-8">
        <div className="flex items-center gap-3">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
            <input 
              type="text" 
              placeholder="Search your library..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container focus:bg-surface-container-highest transition-all text-body-md placeholder:text-outline"
            />
          </div>
          <button className="p-4 bg-surface-container-low rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <SlidersHorizontal size={20} />
          </button>
        </div>
      </section>

      {/* Category Tags */}
      <section className="mb-12 -mx-6 px-6 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-3 whitespace-nowrap pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-label text-sm font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-surface-container-high text-on-surface-variant hover:opacity-80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredBooks.map(book => (
          <BookCard 
            key={book.id} 
            book={book} 
            onClick={() => onBookClick(book)} 
          />
        ))}
      </section>

      {/* FAB */}
      <button 
        onClick={onAddClick}
        className="fixed bottom-28 right-6 w-16 h-16 bg-gradient-to-br from-primary to-primary-dim text-white rounded-full shadow-2xl flex items-center justify-center z-40 active:scale-95 transition-transform"
      >
        <Plus size={32} />
      </button>
    </div>
  );
};
