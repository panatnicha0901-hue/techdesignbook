import React from 'react';
import { BookOpen, Plus, Sparkles, X } from 'lucide-react';
import { GenreChip } from '../components/GenreChip';

interface AddBookScreenProps {
  onCancel: () => void;
}

export const AddBookScreen: React.FC<AddBookScreenProps> = ({ onCancel }) => {
  return (
    <div className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
      {/* Header */}
      <section className="mb-12">
        <h2 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface mb-2">New Addition</h2>
        <p className="text-on-surface-variant font-body text-lg leading-relaxed">Expand your personal library with a new tactile memory.</p>
      </section>

      {/* Form */}
      <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
        {/* Cover Upload */}
        <div className="relative group">
          <div className="aspect-[3/4] w-48 mx-auto bg-surface-container-low rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(47,51,52,0.06)] relative z-10 border border-outline-variant/15">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-on-surface-variant p-6 text-center">
              <BookOpen className="mb-4" size={40} />
              <span className="text-sm font-label font-semibold uppercase tracking-widest">Upload Cover</span>
            </div>
            <input 
              type="file" 
              className="absolute inset-0 opacity-0 cursor-pointer" 
            />
          </div>
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-container/30 rounded-full blur-3xl -z-0" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl -z-0" />
        </div>

        {/* Inputs */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="font-label text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant px-1">Book Title</label>
            <input 
              type="text" 
              placeholder="The Architecture of Light"
              className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all text-lg font-headline font-bold"
            />
          </div>

          <div className="space-y-2">
            <label className="font-label text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant px-1">Author</label>
            <input 
              type="text" 
              placeholder="Elena Rostova"
              className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all font-body"
            />
          </div>

          <div className="space-y-2">
            <label className="font-label text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant px-1">Description</label>
            <textarea 
              rows={4}
              placeholder="A soulful exploration of spatial design and its impact on human emotion..."
              className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all font-body leading-relaxed"
            />
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <label className="font-label text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant px-1">Categories</label>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="px-5 py-2 rounded-full bg-secondary-container text-on-secondary-container text-sm font-label font-medium hover:opacity-80 transition-opacity">Design</button>
              <button type="button" className="px-5 py-2 rounded-full bg-tertiary-container text-on-tertiary-container text-sm font-label font-medium hover:opacity-80 transition-opacity">Philosophy</button>
              <button type="button" className="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-label font-medium hover:bg-surface-container-highest transition-colors">Fiction</button>
              <button type="button" className="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-label font-medium hover:bg-surface-container-highest transition-colors">Poetry</button>
              <button type="button" className="px-5 py-2 rounded-full border border-outline-variant/30 text-primary flex items-center gap-1 text-sm font-label font-medium px-4">
                <Plus size={16} /> Add New
              </button>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="bg-surface-container-low p-8 rounded-xl space-y-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-label text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant">Reading Status</span>
            <span className="text-primary font-headline font-bold">In Progress</span>
          </div>
          <div className="h-4 w-full bg-white rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full w-[45%]" />
          </div>
          <p className="text-xs text-on-surface-variant font-body italic text-center">45% through current chapter</p>
        </div>
      </form>

      {/* Bottom Actions */}
      <footer className="fixed bottom-0 left-0 w-full z-50 px-6 pb-10 pt-4 bg-gradient-to-t from-surface via-surface/90 to-transparent">
        <div className="max-w-2xl mx-auto flex gap-4">
          <button 
            onClick={onCancel}
            className="asymmetric-gradient flex-1 text-white font-headline font-bold py-5 rounded-full shadow-[0_20px_40px_rgba(63,103,90,0.2)] hover:scale-[0.98] transition-transform flex items-center justify-center gap-2"
          >
            <Sparkles size={20} fill="currentColor" />
            Save to Sanctuary
          </button>
        </div>
      </footer>
    </div>
  );
};
