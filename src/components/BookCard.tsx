import React from 'react';
import { Book } from '../types';
import { motion } from 'motion/react';

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[2/3] rounded-xl overflow-hidden mb-4 editorial-shadow group-hover:shadow-xl transition-all duration-300 relative">
        <img 
          src={book.coverUrl} 
          alt={book.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {book.isNew && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest rounded-full text-primary">
              New
            </span>
          </div>
        )}
        {book.isEditorsChoice && (
          <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/80 backdrop-blur-md rounded-lg">
            <p className="text-[10px] font-bold text-primary uppercase tracking-tighter mb-1">
              Editors Choice
            </p>
            <div className="h-1.5 w-full bg-primary-container rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${book.progress || 0}%` }}
              />
            </div>
          </div>
        )}
      </div>
      <h3 className="font-headline text-lg font-bold text-on-surface leading-tight mb-1 line-clamp-1">
        {book.title}
      </h3>
      <p className="font-body text-sm text-on-surface-variant">
        {book.author}
      </p>
    </motion.div>
  );
};
