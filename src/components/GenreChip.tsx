import React from 'react';

interface GenreChipProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'neutral';
}

export const GenreChip: React.FC<GenreChipProps> = ({ label, variant = 'neutral' }) => {
  const variants = {
    primary: 'bg-primary-container text-on-primary-container',
    secondary: 'bg-secondary-container text-on-secondary-container',
    tertiary: 'bg-tertiary-container text-on-tertiary-container',
    neutral: 'bg-surface-container-high text-on-surface-variant'
  };

  return (
    <span className={`px-4 py-1.5 ${variants[variant]} text-[10px] font-semibold rounded-full uppercase tracking-widest`}>
      {label}
    </span>
  );
};
