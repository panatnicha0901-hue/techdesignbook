import React from 'react';
import { ArrowLeft, Share2, MoreVertical, Menu } from 'lucide-react';

interface TopBarProps {
  title?: string;
  onBack?: () => void;
  showBack?: boolean;
  showMenu?: boolean;
  showProfile?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ 
  title = "The Sanctuary", 
  onBack, 
  showBack = false,
  showMenu = false,
  showProfile = false
}) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(47,51,52,0.06)]">
      <div className="flex items-center justify-between px-6 py-4 w-full max-w-5xl mx-auto">
        <div className="flex items-center gap-4">
          {showBack && (
            <button 
              onClick={onBack}
              className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-stone-100/50 transition-colors"
            >
              <ArrowLeft className="text-teal-800" size={24} />
            </button>
          )}
          {showMenu && (
            <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-stone-100/50 transition-colors">
              <Menu className="text-teal-800" size={24} />
            </button>
          )}
          <h1 className="text-teal-900 font-headline font-bold italic text-2xl tracking-tight">
            {title}
          </h1>
        </div>
        
        <div className="flex gap-2">
          {showBack ? (
            <>
              <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-stone-100/50 transition-colors">
                <Share2 className="text-teal-800" size={20} />
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-stone-100/50 transition-colors">
                <MoreVertical className="text-teal-800" size={20} />
              </button>
            </>
          ) : showProfile ? (
            <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high border-2 border-primary-container">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRPT71_j5fUQBtV8rC0nEwOB6hIqhVMthv6W9f2ZWBpZD7TpYR0NenOHqDMzK3zsgJ6Ic1keShvkN8oqEf11Vi0SuqHKyuEwKD1LbHVfcocN_AAfWfdP7kMRKPr_A6npDinahIP3DAo-pV9MMSzacqtAMXIJYJ_hRXWxWvmr6daxgRueZJzi8To_RJG-063PP0YUCd7DwRJeFJAsOnmulZo6kzzZaWepR_GVV8YssqSDWCzoK8ACer2sRvOORHJh0ezFLo3Y4cfsw" 
                alt="Profile"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};
