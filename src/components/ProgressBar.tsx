import React from 'react';

interface ProgressBarProps {
  progress: number;
  label?: string;
  subLabel?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label, subLabel }) => {
  return (
    <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
      {(label || subLabel) && (
        <div className="flex justify-between items-center mb-4">
          {label && <h3 className="font-headline font-bold text-on-surface">{label}</h3>}
          {subLabel && <span className="text-sm font-medium text-primary">{subLabel}</span>}
        </div>
      )}
      <div className="h-4 w-full bg-primary-container rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-500" 
          style={{ width: `${progress}%` }}
        />
      </div>
      {subLabel && (
        <p className="text-xs text-on-surface-variant font-body italic text-center mt-4">
          {progress}% through current chapter
        </p>
      )}
    </div>
  );
};
