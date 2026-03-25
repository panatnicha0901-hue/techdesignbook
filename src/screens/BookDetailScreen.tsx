import React from 'react';
import { Star, Sparkles } from 'lucide-react';
import { Book } from '../types';
import { GenreChip } from '../components/GenreChip';
import { ProgressBar } from '../components/ProgressBar';
import { motion } from 'motion/react';

interface BookDetailScreenProps {
  book: Book;
  onBack: () => void;
}

export const BookDetailScreen: React.FC<BookDetailScreenProps> = ({ book, onBack }) => {
  return (
    <div className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
      {/* Hero Section */}
      <section className="relative mb-12">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl -z-10" />
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Cover */}
          <div className="relative group mx-auto md:mx-0">
            <div className="absolute inset-0 bg-on-surface/5 rounded-lg translate-x-3 translate-y-3 -z-10" />
            <img 
              src={book.coverUrl} 
              alt={book.title}
              referrerPolicy="no-referrer"
              className="w-64 aspect-[2/3] object-cover rounded-lg editorial-shadow border border-white/20"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <Star className="text-amber-500" size={12} fill="currentColor" />
              <span className="text-xs font-bold text-on-surface">{book.rating}</span>
            </div>
          </div>

          {/* Title & Meta */}
          <div className="flex-1 flex flex-col pt-4">
            <h1 className="font-headline text-4xl font-extrabold text-on-surface leading-tight tracking-tight mb-2">
              {book.title}
            </h1>
            <p className="text-xl text-primary font-medium mb-6">by {book.author}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {book.genres.map((genre, i) => (
                <GenreChip 
                  key={genre} 
                  label={genre} 
                  variant={i === 0 ? 'secondary' : i === 1 ? 'tertiary' : 'primary'} 
                />
              ))}
            </div>

            <button className="asymmetric-gradient w-full md:w-fit px-8 py-4 rounded-full flex items-center justify-center gap-3 text-white font-headline font-bold shadow-lg hover:opacity-90 transition-all active:scale-95">
              <Sparkles size={20} />
              Add to Wishlist
            </button>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="space-y-8">
        <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow">
          <h3 className="font-headline text-lg font-bold text-on-surface mb-4">About this Sanctuary</h3>
          <div className="font-body text-on-surface-variant text-lg leading-[1.8] text-justify space-y-4">
            {book.description.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-surface-container-low p-6 rounded-lg text-center">
            <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">Pages</p>
            <p className="font-headline font-bold text-teal-900 text-lg">{book.pages}</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-lg text-center">
            <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">Format</p>
            <p className="font-headline font-bold text-teal-900 text-lg">{book.format}</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-lg text-center">
            <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">Language</p>
            <p className="font-headline font-bold text-teal-900 text-lg">{book.language}</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-lg text-center">
            <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">Published</p>
            <p className="font-headline font-bold text-teal-900 text-lg">{book.publishedYear}</p>
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="mt-12">
        <ProgressBar 
          progress={book.progress || 82} 
          label="Community Reading Focus" 
          subLabel={`${book.progress || 82}% completed this month`} 
        />
      </section>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 w-full z-50 px-6 pb-8 pt-4 bg-white/70 backdrop-blur-xl flex gap-4">
        <button className="flex-1 py-4 bg-surface-container-high rounded-full font-headline font-bold text-on-surface hover:bg-surface-container-highest transition-colors">
          Read Sample
        </button>
        <button className="flex-1 py-4 asymmetric-gradient rounded-full font-headline font-bold text-white shadow-lg active:scale-95 transition-transform">
          Reserve Now
        </button>
      </div>
    </div>
  );
};
