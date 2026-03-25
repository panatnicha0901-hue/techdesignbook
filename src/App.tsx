/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { BottomNav } from './components/BottomNav';
import { LibraryScreen } from './screens/LibraryScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { AddBookScreen } from './screens/AddBookScreen';
import { Book } from './types';
import { motion, AnimatePresence } from 'motion/react';

type Screen = 'library' | 'detail' | 'add';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('library');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'wishlist' | 'profile'>('home');

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setCurrentScreen('detail');
  };

  const handleAddClick = () => {
    setCurrentScreen('add');
  };

  const handleBack = () => {
    setCurrentScreen('library');
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-on-primary-container">
      <TopBar 
        title={currentScreen === 'detail' ? '' : currentScreen === 'add' ? 'The Sanctuary' : 'The Sanctuary'}
        showBack={currentScreen === 'detail' || currentScreen === 'add'}
        onBack={handleBack}
        showMenu={currentScreen === 'library'}
        showProfile={currentScreen === 'library'}
      />

      <main className="relative">
        <AnimatePresence mode="wait">
          {currentScreen === 'library' && (
            <motion.div
              key="library"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <LibraryScreen onBookClick={handleBookClick} onAddClick={handleAddClick} />
            </motion.div>
          )}

          {currentScreen === 'detail' && selectedBook && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <BookDetailScreen book={selectedBook} onBack={handleBack} />
            </motion.div>
          )}

          {currentScreen === 'add' && (
            <motion.div
              key="add"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <AddBookScreen onCancel={handleBack} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {currentScreen === 'library' && (
        <BottomNav 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
      )}
    </div>
  );
}

