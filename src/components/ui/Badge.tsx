import React from 'react';

interface BadgeProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ icon, children, className = '' }) => {
  return (
    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full gradient-box backdrop-blur-sm text-xs font-medium text-white ${className}`}>
      {icon}
      <span>{children}</span>
    </div>
  );
};
