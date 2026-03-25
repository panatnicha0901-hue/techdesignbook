import React from 'react';
import { Home, Sparkles, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'home' | 'wishlist' | 'profile';
  onTabChange: (tab: 'home' | 'wishlist' | 'profile') => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-white/70 backdrop-blur-xl shadow-[0_-10px_40px_rgba(47,51,52,0.06)] rounded-t-[3rem]">
      <button 
        onClick={() => onTabChange('home')}
        className={`flex flex-col items-center justify-center rounded-[2rem] px-6 py-2 transition-all ${
          activeTab === 'home' 
            ? 'bg-teal-50 text-teal-900' 
            : 'text-stone-500 hover:opacity-80'
        }`}
      >
        <Home size={24} fill={activeTab === 'home' ? 'currentColor' : 'none'} />
        <span className="font-label text-[11px] font-semibold uppercase tracking-widest mt-1">Home</span>
      </button>

      <button 
        onClick={() => onTabChange('wishlist')}
        className={`flex flex-col items-center justify-center rounded-[2rem] px-6 py-2 transition-all ${
          activeTab === 'wishlist' 
            ? 'bg-teal-50 text-teal-900' 
            : 'text-stone-500 hover:opacity-80'
        }`}
      >
        <Sparkles size={24} fill={activeTab === 'wishlist' ? 'currentColor' : 'none'} />
        <span className="font-label text-[11px] font-semibold uppercase tracking-widest mt-1">Wishlist</span>
      </button>

      <button 
        onClick={() => onTabChange('profile')}
        className={`flex flex-col items-center justify-center rounded-[2rem] px-6 py-2 transition-all ${
          activeTab === 'profile' 
            ? 'bg-teal-50 text-teal-900' 
            : 'text-stone-500 hover:opacity-80'
        }`}
      >
        <User size={24} fill={activeTab === 'profile' ? 'currentColor' : 'none'} />
        <span className="font-label text-[11px] font-semibold uppercase tracking-widest mt-1">Profile</span>
      </button>
    </nav>
  );
};
